$( document ).ready(function() {

  var kittenArray = [
  'kitten1.jpg',
  'kitten2.jpg',
  'kitten3.jpg',
  'kitten4.jpg',
  'kitten5.jpg',
  'kitten6.jpg',
  'kitten7.jpg',
  'kitten8.jpg',
  'kitten9.jpg',
  'kitten10.jpg',
  'kitten11.jpg',
  'kitten12.jpg',
  'kitten13.jpg',
  ];

  $('<img src="images/' + kittenArray[Math.floor(Math.random() * kittenArray.length)] + '">').appendTo('#column1');
  $('<img src="images/' + kittenArray[Math.floor(Math.random() * kittenArray.length)] + '">').appendTo('#column3');

  //while (#column1 === #column2) {}

});
