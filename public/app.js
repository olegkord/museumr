'use strict';

$(function() {
  console.log('Scripts loaded');


  var renderTemplate_artists = Handlebars.compile($('template#show-all').html());
  let renderTemplate_ONE_artist = Handlebars.compile($('template#show-one').html());
  // $('#new-artist').on("submit", function(e){
  //   event.preventDefault();
  //   console.log( $(this).serialize());
  //   console.log('new artist added')
  // });

  $('#new-artist').submit(function(e){
    $.get('/artists/' + $('#artist-name').val(), re)

  })





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


  // $('#new-artist').click( (event) => {
  //   event.preventDefault();
  //   console.log('new artist added');
  // })



  let renderArtists = function(data){
    console.log('rendering artists');
    let $list = $('.results-div');

    let compiledTemplate = renderTemplate_artists({artist: data})

    $list.html('').append(compiledTemplate);

    registerClickEvents(data);
  }

  let renderOneArtist = function(data){
    console.log('rendering ONE artist');
    console.log(data[0]);

    let $list = $('.results-div');
    let artistPaintings = data[0].paintings;

    let renderObject = {
      artist: data[0],
      paintings: artistPaintings
    };

//NEED AJAX FOR PAINTINGS NOW ??!?!?!?! CRAP


    console.log(renderObject);

    let compiledTempate = renderTemplate_ONE_artist({artist: renderObject})
    $list.html('').append(compiledTempate);
  }

  let registerClickEvents = function(data) {
    let $artistList = $('.results-div > .artist');

    console.log('registering click events');

    for (let i = 0; i < $artistList.length; i++) {
      $artistList.eq(i).click( (event) => {

        //$('.results-div#artists-display').hide();

        let id = data[i]._id;
        console.log(id);
        //AJAX TIME!
        $.get('/artists/'+id, renderOneArtist, 'json');
      });
    }
  }
});
