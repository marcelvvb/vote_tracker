$( document ).ready(function() {


  $.ajax({
    url: 'https://api.imgur.com/3/album/eKui8.json',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Client-ID 197d595eb150846');
    }
  }) //jQuery/AJAX by Hana F.
    .done( function(data) {
      showKittens(data);
  }).fail( function(){
    $('#message').html('Sorry! Could not load.');
  });

  function Tracker() {
    this.randomCatpics = function() {
      return Math.floor(Math.random() * 14);
    }
  }

  Tracker.prototype.randomCatpics = function() {
    this.photoOne = this.randomCatpics();
    this.photoTwo = this.randomCatpics();
    while (this.photoOne === this.photoTwo) {
      this.photoOne = this.randomCatpics();
    }
  }

  var showKittens = function(info) {
  var randomCatpics = []
    for (var i = 0; i < info.data.images.length; i++) {
      randomCatpics.push(info.data.images[i].link);
    }

  $('<img src="' + randomCatpics[Math.floor(Math.random() * randomCatpics.length)] + '">').appendTo('#column1');
  $('<img src="' + randomCatpics[Math.floor(Math.random() * randomCatpics.length)] + '">').appendTo('#column3');
}

});

//Hana F. helped me with this assignment
//classname.addclass('className')
