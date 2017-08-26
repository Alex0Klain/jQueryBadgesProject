$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Alex_Klain.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourse(response.courses.completed);
    }
  });

  function addCourse() {

    var $badges = $('#badges');

    var $course = courses.forEach(function(course){
      $('<div />', {
        'class': 'course'
      }).appendTo($badges);
    })

    $('<h3 />', {
      text: course.title
    }).appendTo($course);

    $('img', {
      src: course.bange
    }).appendTo($course);

    $('<a />', {
      'class': 'btn btn-primary',
      target: '_blank',
      href: course.url,
      text: 'See course'
    }).appendTo($course);

  }

});
