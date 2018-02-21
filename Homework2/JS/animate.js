$(document).ready(function() {
    $("#clickMe").click(function() {
        $("#myHeader").addClass("IncreaseFont", function() {
            $("#myHeader").css("color", "grey").removeClass("IncreaseFont", function() {
                $(this).css("color", "bue");
            });

        });

        $("#addBorder").toggleClass("imgcontainer", function() {



        });

    });




});
