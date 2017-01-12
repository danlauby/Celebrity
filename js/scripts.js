// $(function() {
//   $('form#input').submit(function(e) {
//     var age = parseInt($('input#age').val());
//     var color = $('select#color').val();
//     if(age) {
//       var tom = "Tom Waits";
//       var gordon = "Gordon Ramsey";
//       if(age > 50 && color === 'green') {
//         $('#celebrity').text(tom);
//         $('#match').show();
//       } else if(age < 50 && color === 'blue') {
//         $('#celebrity').text(gordon);
//         $('#noMatch').hide();
//         $('#match').show();
//       } else {
//         $('#match').hide();
//         $('#noMatch').show();
//       }
//     } else {
//
//     }
//     e.preventDefault();
//   });
// });

$(function() {
  $('form#input').submit(function(e) {
    var age = parseInt($('input#age').val());
    var color = $('select#color').val();

    if (age) {
      var tom = "Tom Waits";
      var johnny = "Johnny Greenwood";
      if (age < 50 && color === 'blue') {
        $('#celebrity').text(johnny);
        $('#match').show();
      } else if (age >= 50 && color === 'green') {
        $('#celebrity').text(tom);
        $('#match').show();
      } else {
        $('#match').hide();
        $('#noMatch').show();
      }
    } else {
      alert('Please enter your age');
    }
    e.preventDefault();
  });
});
