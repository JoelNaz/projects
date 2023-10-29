from django.contrib import messages
from django.shortcuts import redirect, render
from django.http import HttpResponse
from serpapi import GoogleSearch
from urllib.parse import urlsplit, parse_qsl
import json


def search(request):
    params = {
    'api_key': '...',           # https://serpapi.com/manage-api-key
    'engine': 'walmart',        # SerpApi search engine	
    'query': 'coffee marker',   # the search query
    'spelling': True,           # activate spelling fix
    'sort': 'best_match',       # sorted by different options
    'min_price': 100,           # minimum price
    'max_price': 150,           # maximum price
    }

    search = GoogleSearch(params)   # where data extraction happens on the SerpApi backend
    results = search.get_dict()     # JSON -> Python dict

    walmart_results = {
        'search_information': results.get('search_information'),
        'filters': results.get('filters'),
        'organic_results': [],
        'featured_item': results.get('featured_item'),
        'related_queries': results.get('related_queries'),
    }

    while 'next' in results.get('serpapi_pagination', {}):
        # add data from current page
        walmart_results['organic_results'].extend(results['organic_results'])

        # update search object
        search.params_dict.update(dict(parse_qsl(urlsplit(results.get('serpapi_pagination', {}).get('next')).query)))

        # get updated information from next page
        results = search.get_dict()

    print(json.dumps(walmart_results, indent=2, ensure_ascii=False))

    
    
def query(request):
    if request.method == 'POST':
        q = request.POST['query']
        print(q)