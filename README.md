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
