$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Alex_Klain.json',
    dataType: 'jsonp',
    success: function(response) {
      $('#badges').html('<div class="course"></div>');
    }
  });

});
