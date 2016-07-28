var Fetch = require('whatwg-fetch');
var baseURL = 'http://pokeapi.co/api/v2';

var service = {
	get: function(url){
		function handleErrors(response) {
		    if (!response.ok) { 
		    	throw Error(response.statusText); 
		    }
		    return response;
	    }

		console.log("making get request");
		  return fetch(url)        
		    .then(handleErrors)
		    .then(function(response) {
		        console.log("get request successful!");
		        return response.json(); //
		    })
		    .catch(function(error) {
		        console.log("get request threw an error.");
		        return null;
		    });
		}
};

module.exports = service;