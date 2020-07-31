// This ensures that the jQuery code does not run until the HTML has fully loaded
$(document).ready(function () {
    // Function to get the current time using moment()
    function updateTime() {
        const timeNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        $('#currentDay').text(timeNow);
    }
    // Using setInterval() and moment() in the updateTime() function the time is being updated in real time (Hehehe)
     setInterval(updateTime, 1000);
     updateTime();

});