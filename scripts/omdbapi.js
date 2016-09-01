console.log( 'ondbapi.js sourced' );
// global search array
var searchResults = [];

$( document ).ready( function(){
  // from Star Trek
  console.log( 'Beam Me Up Scotty!' );

  $( '#searchButton' ).on( 'click', function(){
    console.log( 'in searchButton on click' );
    // get user input
    var movieName = $( '#movieNameIn' ).val();
    console.log( 'searching for:', movieName );
    // omdbapi search url
    // can test the url from console log in Chrome
    var searchURL = 'http://www.omdbapi.com/?s=' + movieName;
    console.log( 'searchURL:', searchURL );
    // ajax call:
    $.ajax({
      url: searchURL,
      dataType: 'JSON',
      success: function( data ){
        console.log( 'ajax success data:', data.Search );
        // store the search results in searchResults
        searchResults = data.Search;
        console.log( 'searchResults:', searchResults );
      }
    } ) ;  // end success

    // I was trying to figure out how to throw the Movie Poster in the DOM, along with year and Name. 
      //Create a movie Object
      // var newMovie = {
      //   movieName: $( '#movieNameIn' ).val(),
      //   year: $( '#yearIn' ).val(),
      //   type: $( '#typeIn' ).val(),
      //   picURL: $( '#picURLIn' ).val(),
      //   description: $( '#descriptionIn' ).val()
      // }; // end new car
      // // push into the garage array
      // movie.push( newMovie );
      // showMovies();

      // var showMovies = function() {
      //   console.log( 'in showMovies' );
      //   // empty output div
      //   $( '#moviesOut' ).empty();
      //   // loop through movies in favorites and display in the div with id of "moviesOut"
      //   for( var i = 0; i < movies.length; i++ ){
      //     // movie bold text
      //     $( '#moviesOut' ).append( '<p><b>' + movies[ i ].movieName + ' ' + movies[ i ].year + ' ' + movies[ i ].type + '</b></p>' );
      //     // movie description
      //     $( '#moviesOut' ).append( '<p>' + movies[ i ].description + '</p>' );
      //     // movie poster
      //     $( '#moviesOut' ).append( '<img src="' + movies[ i ].picURL + '">' );
     // end for); // end showMovies



      //display results on DOM


      // displayResults= function(){
      //

    }); // end ajax
  }); // end searchButton on click
 // end doc ready
