document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var button = document.querySelector('button');

  button.addEventListener('click', clickButton);

  function clickButton() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com',
      method: 'GET',
      data: {},
      dataType: 'text'
    });
  }




});
