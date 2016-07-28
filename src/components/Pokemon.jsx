var React = require('react');
var Name = require('./Name.jsx');
var Image = require('./Image.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var PokemonStore = require('../reflux/pokemon-store.jsx');

var Pokemon = React.createClass({
	mixins: [Reflux.listenTo(PokemonStore, 'onPokemonChange')],
	getInitialState: function() {
		return { pokemonList:[], isListLoading: false};
	},
	componentWillMount: function() {
		Actions.getPokemonList();
	},
	componentDidMount: function(){
        window.addEventListener('scroll', this.handleScroll);
    },
    handleScroll: function(){
        if ((!(this.state.isListLoading) && 
        		window.innerHeight + window.scrollY) >= document.body.offsetHeight) {            
        	this.setState({
	          isListLoading: true
	     	});
            Actions.getPokemonList();
        }
    },
	onPokemonChange: function(event, pokemon){
	    if(pokemon){
	      console.log("Pokemon changed. setting state.");      
	      this.setState({
	          pokemonList: pokemon,
	          isListLoading : false
	      });
	    } else {
		      this.setState({
		          pokemonList: null,
		          isListLoading : false
		      });
    	}
  	},
	render: function() {		
		var List = this.state.pokemonList.map(function(pokemon, index) {		
			pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
			return (
				<div className="col-xs-6 col-sm-4 col-md-3 col-lg-3" key={''+ index+1}>
					<div className="panel panel-primary">
						<div className="panel-body">	
							<Name value={pokemon.name} index={index+1} />
							<Image 
								imgSrc={
								'http://pokeapi.co/media/sprites/pokemon/'+(index+1)+'.png'
							}/>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div>{List}</div>
		);
	}	
});


module.exports = Pokemon;
