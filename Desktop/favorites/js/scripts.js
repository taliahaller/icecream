$(document).ready(function() {
  $('.formOne').submit(function(event) {

    var flavor = $('input#flavor').val();
    var scoops = $('input#scoops').val();
    var toppings = $('input#toppings').val();

    var array = [flavor, scoops, toppings];

    $('#answers').text(array);

    $('#details').show();

    $('#answersSpecific').text(array[1] + " " + array[0]);
    $('#toppingAnswer').text(array[2]);

    $('#details-2').show();

    event.preventDefault();
  });
});
