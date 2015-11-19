$(function() {
  console.log('Scripts loaded');

  $('#artist-add').click( (event) => {
    event.preventDefault();
    console.log('clicked add artist');

    

  })

  $('#painting-add').click( (event) =>  {
    event.preventDefault();
    console.log('clicked add painting');
  })

  $('#new-artist').click( (event) => {
    console.log('new artist added');
  })


})
