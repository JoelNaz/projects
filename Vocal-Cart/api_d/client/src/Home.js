import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import {
  Typography,
  TextField,
  Paper,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Grid,
  Container,
  AppBar,
  Toolbar,
  Box,
  LinearProgress,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import "./Home.css"
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [selectedResultIndex, setSelectedResultIndex] = useState(null);
  const [speaking, setSpeaking] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentEmail, setCurrentEmail] = useState();
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    
    if (currentUser) {
      setShowRecommendations(true);
    }
  }, [currentUser]);

  const navigate = useNavigate();

  const handleGetRecommendations = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/query/get_recommendations/', {
         email: currentEmail,
      });
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  useEffect(() => {
    
    axios.get("http://127.0.0.1:8000/query/user")
      .then(function (res) {
        setCurrentUser(res.data.username); 
        setCurrentEmail(res.data.email);
      })
      .catch(function (error) {
        setCurrentUser(null);
      });
  }, []);

  const handleVoiceCommand = (command) => {
    if (command.toLowerCase().includes('select result')) {
      const index = parseInt(command.split(' ')[2]) - 1;
      if (index >= 0 && index < results.length) {
        setSelectedResultIndex(index);
        const selectedResult = results[index];
        const confirmationMessage = `You have selected ${selectedResult.title}.`;
        speak(confirmationMessage); // Call a speak function to provide a voice confirmation
      } else {
        speak('Invalid selection.'); // Speak an error message for invalid selection
      }
    }
  };

  const speak = (message) => {
    const speechSynthesis = window.speechSynthesis;
    const speechText = new SpeechSynthesisUtterance(message);
    speechText.onend = () => {
      setSpeaking(false);
    };
    setSpeaking(true);
    speechSynthesis.speak(speechText);
  };

  const stopSpeaking = () => {
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.cancel();
    setSpeaking(false);
  };

  const handleStartListening = () => {
    if (!listening) {
      SpeechRecognition.startListening();
    }
  };

  const handleStopListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    }
  };

  const handleResetTranscript = () => {
    resetTranscript();
  };


  const handleLogout = (event) => {
    event.preventDefault();
    axios.post(
      "http://127.0.0.1:8000/query/logout/",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    });
    
    alert("You are logged out")
  }

  const handleVoiceSearch = async () => {
    if (transcript) {
      if (transcript.toLowerCase().includes('select result')) {
        handleVoiceCommand(transcript.toLowerCase()); // Handle voice command for result selection
      } else {
        setLoading(true);
        try {
          const response = await axios.post('http://127.0.0.1:8000/query/handleSearch/', { query: transcript,user: currentEmail, });
          setResults(response.data.results);
        } catch (error) {
          console.error('Error fetching search results:', error);
          setError('Error fetching search results. Please try again later.');
        } finally {
          setLoading(false);
        }
      }
    }
  };


  return (
    <div className="homepage">
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VocalCart
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            {!currentUser && (
              <>
                <Button color="inherit" component={Link} to="/signin">
                  Sign In
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Sign Up
                </Button>
              </>
              )}
              {currentUser && (
                <Button color="inherit" onClick={handleLogout}>
                  Sign Out
                </Button>
              )}
            </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className="main-content">

      <Grid container spacing={2} justifyContent="center" >
          <Grid item xs={12}>
            <Card elevation={3}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}>{currentUser ? currentUser.charAt(0).toUpperCase() : null}</Avatar>}
                titleTypographyProps={{ variant: 'h5' }}
                title={currentUser ? `Welcome, ${currentUser}` : 'Welcome to the Home Page'}
              />
              {currentUser && (
                <CardContent>
                  {/* Add additional information or actions for logged-in users if needed */}
                </CardContent>
              )}
            </Card>
          </Grid>
        </Grid>

        <Box my={4} textAlign="center">
          <img
            src="https://images.assetsdelivery.com/compings_v2/urfandadashov/urfandadashov1808/urfandadashov180816281.jpg" // Replace this with your logo URL
            alt="VocalCart Logo"
            className="logo"
          />
          <Typography variant="h3" gutterBottom>
            VocalCart
          </Typography>
          <Typography variant="h6" gutterBottom>
              Listened Query: {transcript}
            </Typography>
        <Button variant="contained" onClick={handleStartListening} disabled={listening} sx={{ margin: 0.5 }}>
          Start Listening
        </Button>
        <Button variant="contained" onClick={handleStopListening} disabled={!listening}sx={{ margin: 0.5 }}>
          Stop Listening
        </Button>
        <Button variant="contained" onClick={handleResetTranscript}sx={{ margin: 0.5 }}>
          Reset
        </Button>
        <Button variant="contained" onClick={handleVoiceSearch} disabled={listening}sx={{ margin: 0.5 }}>
          Search
        </Button>
        {showRecommendations && (
        <Button variant="contained" onClick={handleGetRecommendations}sx={{ margin: 0.5 }}>
          Your Recommendations
        </Button>
      )}
        <Button variant="contained" onClick={stopSpeaking} disabled={!speaking}sx={{ margin: 0.5 }}>
          Stop Speaking
        </Button>
        </Box>
        <Grid container spacing={3}>
          {loading && (
            <Grid item xs={12} className="loading">
              <LinearProgress color="primary" />
            </Grid>
          )}
          {error && (
            <Grid item xs={12}>
              <Typography variant="body1" color="error" align="center">
                {error}
              </Typography>
            </Grid>
          )}


      {recommendations.length > 0 && recommendations.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={product.product_page_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card>
                  <CardMedia component="img" height="200" image={product.image} alt={product.title} />
                  <CardContent>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="body1">Ratings: {product.ratings}</Typography>
                    <Typography variant="body1">Price: ${product.price} USD</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
      ))}




          {results.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={product.product_page_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card>
                  <CardMedia component="img" height="200" image={product.image} alt={product.title} />
                  <CardContent>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="body1">Ratings: {product.ratings}</Typography>
                    <Typography variant="body1">Price: ${product.price} USD</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      <footer className="footer">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} VocalCart. All rights reserved.
        </Typography>
      </footer>
    </div>
      
      
            
  );
};

export default HomePage;
