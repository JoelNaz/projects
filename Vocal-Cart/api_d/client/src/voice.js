import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const TextToSpeechAndSpeechToText = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const speakText = () => {
    const speechSynthesis = window.speechSynthesis;
    const speechText = new SpeechSynthesisUtterance(transcript);
    speechSynthesis.speak(speechText);
  };

  return (
    <div>
      <h1>Text to Speech and Speech to Text</h1>
      <div>
        <textarea
          rows="4"
          cols="50"
          value={transcript}
          placeholder="Speech to Text"
          readOnly
        />
        <br />
        <button onClick={speakText} disabled={!transcript}>
          Convert to Speech
        </button>
      </div>
      <div>
        <p>Speech Recognition: {listening ? "Listening..." : "Not Listening"}</p>
        <button onClick={SpeechRecognition.startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  );
};

export default TextToSpeechAndSpeechToText;
