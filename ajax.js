document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var button12 = document.querySelector('#button12');
  var button3456 = document.querySelector('#button3456');

  button12.addEventListener('click', clickButton12);
  button3456.addEventListener('click', clickButton3456);

  function clickButton12() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com',
      method: 'GET',
      data: {},
      dataType: 'text'
    });
  }

  function clickButton3456() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function (responseData) {
      console.log(responseData);
      var section3456 = document.querySelector('#step3456');
      var dataOutput = document.createElement('p');
      dataOutput.innerHTML = responseData;
      section3456.appendChild(dataOutput);
    });
  }



});
