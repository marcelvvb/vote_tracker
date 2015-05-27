$( document ).ready(function() {

  var times;
  $.ajax({
    url: "https://api.imgur.com/3/album/eKui8.json",
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Client-ID 197d595eb150846');
    }
  }) //jQuery/AJAX by Hana F.
    .done( function(data) {
      times = data;
      showKittens();
  }).fail( function(){
    $('#message').html('Sorry! Could not load.');
  });

  var showKittens = function() {
  var kittenArray = []
    for (var i = 0; i < 14; i++) {
      kittenArray.push(times.data.images[i].link);
    }

  $('<img src="' + kittenArray[Math.floor(Math.random() * kittenArray.length)] + '">').appendTo('#column1');
  $('<img src="' + kittenArray[Math.floor(Math.random() * kittenArray.length)] + '">').appendTo('#column3');
}
});
