$(function() {
  console.log('Scripts loaded');

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
})

function renderArtists = function(data) {
  console.log(rendering artists);

  //render your artists here.
}
