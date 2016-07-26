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
      var genre = data.Genre;
      console.log(genre);
      var genres = genre.split(', ');
      var poster = data.Poster;
      var title = data.Title

      $('.row').append('<div class="col-md-4"></div>');

      $('.col-md-4:nth-of-type(' + buttonCounter + ')').append('<h2 class="' + genres.join(' ') + '">' + title + '</h2>');

      $('.col-md-4:nth-of-type(' + buttonCounter + ')').append('<img src="' + data.Poster + '" class="' + genres.join(' ') + '">');



      var counter = 1;

      for (var i = 0; i < genres.length; i++) {

        console.log(genres[i]);

        if (!genreArray.includes(genres[i]))
        {
          genreArray.push(genres[i]);
          console.log(genreArray);

          $('<option>' + genres[i] + '</option>').insertAfter('option:nth-child(' + counter + ')');

          counter++;
        }
      }

      $('#searchInfo').val('');



      $('select').change(function () {
      $('option:selected').each(function () {

        var cLass = $(this).text();
        console.log(cLass);

        $('img').css('display', 'block');
        $('h2').css('display', 'block');

        if ($('img').hasClass(cLass))
        {
          $('img:not(.' + cLass + ')').css('display', 'none');
          $('h2:not(.' + cLass + ')').css('display', 'none');
        }
      });
    });


      // console.log(genreArray);
    });
  });
});
