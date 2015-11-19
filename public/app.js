'use strict';

$(function() {
  console.log('Scripts loaded');

  var renderTemplate_artists = Handlebars.compile($('template#show-all').html());


  $('#artist-add').click( (event) => {
    event.preventDefault();
    console.log('clicked add artist');
    $('.new-artist').show();
  })

  $('#artists-view').click( (event) => {
    event.preventDefault();
    console.log('view ALL artists');

    $.get('http://localhost:3000/artists', renderArtists, 'json')
  })

  $('#painting-add').click( (event) =>  {
    event.preventDefault();
    console.log('clicked add painting');
  })

  $('#new-artist').click( (event) => {
    event.preventDefault();
    console.log('new artist added');
  })

  var renderArtists = function(data){
    // console.log('rendering artists');
    $('.new-artist').hide();
    var $list =$ ('.results-div');
    console.log($list);

    console.log(data[0]);
    var compiledTemplate = renderTemplate_artists({artist: data})

    $list.html('').append(compiledTemplate);
  }

});


  //render your artists here.
