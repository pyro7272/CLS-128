$(document).ready(function() {
    $("#clickMe").click(function() {
        $('#myHeader').animate({ color: 'red' }, 500);

        $('#myHeader').animate({ color: 'white' }, 500);
        $('#leonS').css('border', "solid 2px red"); 
    });
   });
