# Your First (Several) Asynchronous Requests

[See assignment in Alexa.](https://alexa.bitmaker.co/cohorts/67/assignments/2055/latest)


Step 0 - Setup and Knowledge Check
----------------------------------------------------------------
1) What HTTP method did your browser use to make the request?
<!-- The brower used the "GET" method. -->

2) How many milliseconds did it take your browser to complete it?
<!-- The first request used 19.62 ms for queueing and 42.96 ms to complete, for a total time of 62.59 ms -->
<!-- The second request used 1.89 ms for queueing and 28.09 ms to complete, for a total time of  29.99 ms -->

3) What HTTP status code did the server return? What does that mean?
<!-- The HTTP status code that the server returned is 200, meaing that the request has succeeded. -->

4) Look at the "Initiator" and "Type" columns. Was this an xhr/JavaScript/AJAX request or a normal browser request?
<!-- Both requests are normal browser requests -->


Step 1 - Your First AJAX Request
----------------------------------------------------------------
5) What are the values in the "Method" and "Status" columns? Compare these values to Step 0.
<!-- Method is still 'GET' and status is still 200 -->

6) What are the values in the "Type" and "Initiator" columns? Compare these values to Step 0.
<!-- Type is now in 'xhr' and Initiator indicates 'jquery' -->


Step 3 - Using Information in the Response
----------------------------------------------------------------
4) Click on the request. This displays a detailed view of this one request. Investigate the "Response" and "Preview" sub-tabs. What was the content of the response?
<!-- The content of this response is "Wow what a ride! I came all the way from the server!" -->


Step 4 - When Things Go Wrong...
----------------------------------------------------------------
3) What is the new HTTP status code?
<!-- The new status code is 500, which stands for error with an unexpected condition -->


Step 6 - All Together Now!
----------------------------------------------------------------
2) Switch back and forth between the /ping and /pong URLs, reloading the page and running your request each time. What do you see in your Developer Tools? What messages show up in your console?
<!-- When at /ping, Dev Tools show a status code of 200 and the console shows the message that associates with the .done callback -->
<!-- When at /pong, Dev Tools show a status code of 500 and the console shows the message that associates with the .fail callback -->
<!-- In both cases, the message that associates with the .always callback shows as well -->


Step 7 - The Hive Mind (Shared State)
----------------------------------------------------------------
4) In a done callback, write the responseData to the Step 7 <section>. Ask your neighbour what number they got and compare. Run your request a few times and compare again!
<!-- The /count route is an aggregated counter that records anyone who ever visited /count. The counter keeps going up by 1 based on the number of clicks by anyone accessing /count. -->


Step 9 - Receiving HTML in the Response
----------------------------------------------------------------
3) Investigate the Request and Response "Headers" in your Network Tab. What is the 'Accepts' of the Request, and the 'Content-Type' of the response?
<!-- The 'Accepts' of the request is 'text/html'. The 'Content-Type' of the response is  'text/html'-->
