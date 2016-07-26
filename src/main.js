$(document).ready(function() {

  var buttonCounter = 0;
  var genreArray = [];

  $('form').submit(function(event) {
    event.preventDefault();

    buttonCounter++;
    console.log(buttonCounter);

    var title = $('#searchInfo').val();

    $.ajax({
        method: 'GET',
        url: 'http://www.omdbapi.com/?t=' + title
    }).done(function (data){

      var poster = data.Poster;
      var title = data.Title

      $('.row').append('<div class="col-md-4"></div>');

      $('.col-md-4:nth-of-type(' + buttonCounter + ')').append('<h1>' + title + '</h1>');

      $('.col-md-4:nth-of-type(' + buttonCounter + ')').append('<img src="' + data.Poster + '">');

      var genre = data.Genre;
      console.log(genre);
      var genres = genre.split(', ');

      var counter = 1;

      for (var i = 0; i < genres.length; i++) {

        if (!genreArray.includes(genres[i]))
        {
          genreArray.push(genres[i]);
          console.log(genreArray);

          $('<option>' + genres[i] + '</option>').insertAfter('option:nth-child(' + counter + ')');

          counter++;
        }
      }


      // console.log(genreArray);
    });
  });
});
