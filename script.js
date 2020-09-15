//Document ready fuction
$(document).ready(function() {
    
    $('#currentDay').text(moment().format("dddd MMMM Do, YYYY")) //setDate on website
    
    renderPlans(); //run function to render Imput entry in time slots 

    //save to local storage on click of lock save button
    $('.saveBtn').on('click',function(){ 
        let input = $(this).siblings('input')
        let value = input.val()
        let id = input.attr("id")
        localStorage.setItem(id, value)
    })
    
    function renderPlans() {
        for (let i = 0; i <= 12; i++) {
        $("#" + i + "TimeSlot").val(localStorage.getItem(i + "TimeSlot"));
        }
      }

      
      let presentHour = moment().format("HH"); 
      let presentHourInt = parseInt(presentHour); 
      
      
      $("#9TimeSlot").attr("time-data", moment("9:00 am", "h:mm a").format("HH"));
      $("#10TimeSlot").attr("time-data", moment("10:00 am", "hh:mm a").format("HH"));
      $("#11TimeSlot").attr("time-data", moment("11:00 am", "hh:mm a").format("HH"));
      $("#12TimeSlot").attr("time-data", moment("12:00 pm", "hh:mm a").format("HH"));
      $("#1TimeSlot").attr("time-data", moment("1:00 pm", "h:mm a").format("HH"));
      $("#2TimeSlot").attr("time-data", moment("2:00 pm", "h:mm a").format("HH"));
      $("#3TimeSlot").attr("time-data", moment("3:00 pm", "h:mm a").format("HH"));
      $("#4TimeSlot").attr("time-data", moment("4:00 pm", "h:mm a").format("HH"));
      $("#5TimeSlot").attr("time-data", moment("5:00 pm", "h:mm a").format("HH"));
     
      //setting colors based on past, present and future time
      for (let i = 0; i <= 12; i++) {  

        let inputHour = $("#" + i + "TimeSlot").attr("time-data"); 
        let inputHourInt = parseInt(inputHour); 
  
        if (presentHourInt === inputHourInt) {
            $("#" + i + "TimeSlot").addClass("present"); 
        }
        if (presentHourInt > inputHourInt) {  
            $("#" + i + "TimeSlot").addClass("past");
        }
        if (presentHourInt < inputHourInt) {  
            $("#" + i + "TimeSlot").addClass("future");
        }
      }

});