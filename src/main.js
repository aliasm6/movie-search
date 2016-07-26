$(document).ready(function() {
  console.log('test');

  $('form').submit(function(event) {
    event.preventDefault();

    var title = $('#searchInfo').val();

    $.ajax({
        method: 'GET',
        url: 'http://www.omdbapi.com/?t=' + title
      }).done(function (data){
        var poster = data.Poster;



        console.log(poster);
        console.log(data);

    });
  });
});
