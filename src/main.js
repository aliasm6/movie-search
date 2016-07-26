$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();

    var title = $('#searchInfo').val();

    $.ajax({
        method: 'GET',
        url: 'http://www.omdbapi.com/?t=' + title
      }).done(function (data){
        var poster = data.Poster;
        var title = data.Title
        $('#poster').append('<img src="' + data.Poster + '">');
        $('<h1>' + title + '</h1>').insertBefore('img');

        console.log(poster);
        console.log(data);

        $.ajax({
          method: 'GET',
          url: 'http://www.omdbapi.com/?t=' + title
        }).done(function (data){

          var genre = data.Genre;
          var genres = genre.split(', ');

          console.log(genre);
          console.log(genres);

          var counter = 1;

          for (var i = 0; i < genres.length; i++) {

            $('<option>' + genres[i] + '</option>').insertAfter('option:nth-child(' + counter + ')');

            counter++;
          }
        });
    });
  });
});
