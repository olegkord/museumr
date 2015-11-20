'use strict';

$(function() {
  console.log('Scripts loaded');

  let renderTemplate_artists = Handlebars.compile($('template#show-all').html());
  let renderTemplate_ONE_artist = Handlebars.compile($('template#show-one').html());

  $('#artist-add').click( (event) => {
    event.preventDefault();
    console.log('clicked add artist');
    $('.form-div#new-artist').show();
    $('.form-div#new-painting').hide();
    $('.results-div#artists-display').hide();
  })

  $('#artists-view').click( (event) => {
    event.preventDefault();
    $('.results-div#artists-display').show();
    $('.form-div#new-artist').hide();
    $('.form-div#new-painting').hide();
    console.log('view ALL artists');

    $.get('http://localhost:3000/artists', renderArtists, 'json')
  })

  $('#painting-add').click( (event) =>  {
    event.preventDefault();
    $('.results-div#artists-display').hide();
    $('.form-div#new-painting').show();
    $('.form-div#new-artist').hide();
    console.log('clicked add painting');
  })


  $('#new-artist').click( (event) => {
    event.preventDefault();
    console.log('new artist added');
  })



  let renderArtists = function(data){
    console.log('rendering artists');
    let $list = $('.results-div');

    let compiledTemplate = renderTemplate_artists({artist: data})

    $list.html('').append(compiledTemplate);

    registerClickEvents(data);
  }

  let renderOneArtist = function(data){
    console.log('rendering ONE artist');
    console.log(data);

    let $list = $('.results-div');
    let artistPaintings = data.paintings;

    let compiledTempate = renderTemplate_ONE_artist({
      artist: data,
      paintings: artistPaintings
    })

  }

  let registerClickEvents = function(data) {
    let $artistList = $('.results-div > .artist');

    console.log('registering click events');

    for (let i = 0; i < $artistList.length; i++) {
      $artistList.eq(i).click( (event) => {

        $('.results-div#artists-display').hide();

        let id = data[i]._id;

        //AJAX TIME!
        $.get('/artists/'+id, renderOneArtist, 'json');
      });
    }
  }
});
