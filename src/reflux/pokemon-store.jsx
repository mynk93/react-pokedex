var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var PokemonStore = Reflux.createStore({
	listenables: [Actions],
	init: function(){
        this.state = {
            pokemonList: [],            
            nextURL: 'http://pokeapi.co/api/v2/pokemon/?limit=16'
        };
    },
    getInitialState: function(){
        return this.state;
    },
	getPokemonList: function() {
		HTTP.get(this.state.nextURL)
		.then(function(data) {
			this.state.nextURL = data.next;
			if(data.results){
                for(var index in data.results){
                    this.state.pokemonList.push(data.results[index]);
                }
            } 
			this.fireUpdate();
		}.bind(this));
	},
	fireUpdate: function() {
		this.trigger('change', this.state.pokemonList);
	}
});

module.exports = PokemonStore;