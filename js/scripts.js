$(function() {
  $('form#input').submit(function(e) {
    var age = parseInt($('input#age').val());
    var color = $('select#color').val();
    if (age) {
      var tom = "Tom Waits";
      var johnny = "Johnny Greenwood";
      if (age < 50 && color === 'green') {
        $('#celebrity').text(johnny);
        $('div#answer').addClass('green');
        $('#noMatch').hide();
        $('#match').show();
      } else if (age >= 50 && color === 'blue') {
        $('#celebrity').text(tom);
        $('div#answer').addClass('blue');
        $('#noMatch').hide();
        $('#match').show();
      } else {
        $('div#answer').addClass('noMatch');
        $('#match').hide();
        $('#noMatch').show();
      }
    } else {
      alert('Please enter your age');
    }
    e.preventDefault();
  });
});
