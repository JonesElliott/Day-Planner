// // This ensures that the jQuery code does not run until the HTML has fully loaded
// $(document).ready(function () {
//     $(document).ready(function () {
//         // Get the current time using moment()
//         function updateTime() {
//          var timeNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
         
//          if (!isTwelveHourFormat) {
//            timeNow = moment().format("dddd, MMMM Do YYYY, HH:mm:ss a");
//          }

//          $('#currentDay').text(timeNow);
//        }
//        // Using setInterval() and moment() in the updateTime() function the time is being updated in real time. It's mostly just a big ball of wibbly wobbly, timey wimey stuff.
//        setInterval(updateTime, 1000);
//        updateTime();
       
//        // var savedEvents = {
//        //   userEvent: ["", "", "", ""]
//        // };

//        // init();

//        // // Get locally stored events
//        // function init() {
//        //   //var eventTimeSlot = JSON.parse(localStorage.getItem("savedEvents.timeSlot"));
//        //   var storedEvent = JSON.parse(localStorage.getItem("savedEvents.userEvent"));
//        //   // if (eventTimeSlot !== null) {
//        //   //   savedEvents.timeSlot = eventTimeSlot;
//        //   // }
//        //   if (storedEvent !== null) {
//        //     savedEvents.userEvent = storedEvent;
//        //   }
//        // }

//        // // Save events to local storage
//        // function saveUserEvents() {
//        //   //localStorage.setItem("savedEvents.timeSlot", JSON.stringify(savedEvents.timeSlot));
//        //   localStorage.setItem("savedEvents.event", JSON.stringify(savedEvents.userEvent));
//        // }

//        function executeOrder66() {
//          $('.timeContainer').html("");
//          dayHours = 24;
//          timeChart = 0;
//          timeIndex = 0;
//        };
       
//        // General variables
//        var dayHours = 24;
//        var timeChart = 0;
//        var timeIndex = 0;
//        var isTwelveHourFormat = true;

//        function updateTimeBlocks() {
//          for (let i = 0; i < dayHours; i++) {
//            // If set to 12 format this helps format the time block divs
//            if (isTwelveHourFormat) {
//              if (timeChart > 11) {
//                timeChart = 0;
//              }
//            }

//            // Writes AM or PM to the time block in the appropriate plce
//            let amPM = "";
//            if (timeIndex < 11 || timeIndex > 22) {
//              amPM = "AM";
//            } else {
//              amPM = "PM";
//            }

//            timeIndex = timeIndex + 1;
//            timeChart = timeChart + 1;

//            // Writing the time block elements
//            const rowDiv = $('<div>').attr('class', 'row').appendTo($('.timeContainer'));
//            const hourDiv = $('<div>').attr('class', 'col-md-1 hour').text(timeChart + amPM).appendTo(rowDiv);
//            var planInput = $('<input>').attr('type', 'text').attr('id', timeIndex).attr('class', 'col-md-10 planner-input').appendTo(rowDiv);
//            const saveButton = $('<button>').attr('class', 'col-md-1 far fa-save saveBtn').appendTo(rowDiv);
//          }
//        }


//        $('.saveBtn').on('click', function(event) {
//          //event.stopPropagation();
//          console.log("Clicked");


//          var element = event.target;
//          var inputElement = element.parentElement.firstChild.nextSibling;
//          var plannerText = inputElement.value();
//          var plannerIndex = inputElement.getAttribute('id');
         
//          console.log(inputElement);
//          console.log("Planner Hour/ID: " + plannerIndex);
//          console.log("Planner Text: " + plannerText);
//        });



//        // Buttons to change between 12 & 24 hour format
//        $('#hour-12').on('click', function(){
//          isTwelveHourFormat = true;
//          executeOrder66();
//          updateTimeBlocks();
//          console.log(isTwelveHourFormat);
//        });
//        $('#hour-24').on('click', function(){
//          isTwelveHourFormat = false;
//          executeOrder66();
//          updateTimeBlocks();
//          console.log(isTwelveHourFormat);
//        });

//        // Event listener for each save button
       

//        // Update the background based on the current time
//        function updateTimeBackground() {
//          //console.log(currentHour);
         
//          for (let i = 1; i < (dayHours + 1); i++) {
//            var currentHour = parseInt(moment().format("H"));
//            // Gets the current input field based on id
//            var timeID = parseInt($('#' + i).attr('id'));

//            newTimeID = timeID;

//            // Adds past, present, or future class based on the relation to the current time
//            if (currentHour === timeID) {
//              $("#" + timeID).addClass("present");
//              //$("#" + timeID).val("Present");
//            } else if (currentHour < timeID) {
//              $("#" + timeID).addClass("future");
//              //$("#" + timeID).val("Future");
//            } else if (currentHour > timeID) {
//              $("#" + timeID).addClass("past");
//              //$("#" + timeID).val("past");
//            }
//          }
//        }
       
//        setInterval(updateTimeBackground, 1000);
//        updateTimeBackground();

//        updateTimeBlocks();

//      });
// });

