document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var button12 = document.querySelector('#button12');
  var button3456 = document.querySelector('#button3456');
  var button7 = document.querySelector('#button7');
  var button8 = document.querySelector('#button8');

  button12.addEventListener('click', clickButton12);
  button3456.addEventListener('click', clickButton3456);
  button7.addEventListener('click', clickButton7);
  button8.addEventListener('click', clickButton8);

  var dataOutput = document.createElement('p');
  var finished = document.createElement('p');
  var finishedMessage = 'Well, anyways, the request is finished';

// The following happens when button12 is clicked
  function clickButton12() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com',
      method: 'GET',
      data: {},
      dataType: 'text'
    });
  }

// The following happens when button3456 is clicked
  function clickButton3456() {

    var section3456 = document.querySelector('#step3456');

    $.ajax({

      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {},
      dataType: 'text'

    }).done(function (responseData) {
      console.log('Alright here is your request result');
      dataOutput.innerHTML = responseData

    }).fail(function (responseData) {
      console.log('Ooops ... sorry for the error ...');
      dataOutput.innerHTML = responseData.responseText

    }).always(function () {
      console.log(finishedMessage);
    });
    section3456.appendChild(dataOutput);
    finished.innerHTML = finishedMessage;
    section3456.appendChild(finished);
  }

// The following happens when button7 is clicked
  function clickButton7() {

    var section7 = document.querySelector('#step7');

    $.ajax({

      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {},
      dataType: 'text'

    }).done(function (responseData) {
      console.log('Here comes the counter!');
      dataOutput.innerHTML = responseData

    }).fail(function () {
      console.log('Ooops here is another error ...');
      dataOutput.innerHTML = 'Sorry I will do better next time.'

    }).always(function () {
      console.log(finishedMessage);
    });
    section7.appendChild(dataOutput);
    finished.innerHTML = finishedMessage;
    section7.appendChild(finished);
  }

  // The following happens when button8 is clicked
  function clickButton8() {

    var section8 = document.querySelector('#step8');

    $.ajax({

      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: { timezone: 'Europe/Sofia' },
      dataType: 'text'

    }).done(function (responseData) {
      console.log('Here comes the time!');
      dataOutput.innerHTML = responseData

    }).fail(function () {
      console.log('Ooops here is another error ...');
      dataOutput.innerHTML = 'Sorry for the wrong time. I will do better next time.'

    }).always(function () {
      console.log(finishedMessage);
    });
    section8.appendChild(dataOutput);
    finished.innerHTML = finishedMessage;
    section8.appendChild(finished);
  }

});
