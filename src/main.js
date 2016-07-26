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



      // console.log(poster);
      // console.log(data);
      //if [i][j] === [i][j] splice?

      var genre = data.Genre;
      console.log(genre);
      var genres = genre.split(', ');

      genreArray.push(genres);
      console.log(genreArray);

      // console.log(genre);
      // console.log(genres);

      var counter = 1;

      for (var i = 0; i < genres.length; i++) {

        $('<option>' + genres[i] + '</option>').insertAfter('option:nth-child(' + counter + ')');

        counter++;
      }
    });
  });
});
