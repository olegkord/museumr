'use strict';

$(function() {
  console.log('Scripts loaded');

  var renderTemplate_artists = Handlebars.compile($('template#show-all').html());


  $('#artist-add').click( (event) => {
    event.preventDefault();
    console.log('clicked add artist');
    $('.form-div#new-artist').show();
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
    $('.form-div#new-artist').hide();
    var $list =$ ('.results-div');
    console.log($list);

    console.log(data);
    var compiledTemplate = renderTemplate_artists({artist: data})

    $list.html('').append(compiledTemplate);

    registerClickEvents(data);
  }

  var registerClickEvents = function(data) {
    let $artistList = $('.results-div > .artist');
    console.log('registering click events');
    console.log(data);

    for (let i = 0; i < $artistList.length; i++) {
      $artistList.eq(i).click( (event) => {
        let id = data[i]._id;
        //AJAX TIME!
        $.get('/artists/'+id, (data) => {

        })
      })

    }

    }
  });
