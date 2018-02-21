
    $("#clickme").click(function() {

        $("#header").addClass("IncreaseFont", function() {
            $("#header").css("color", "blue").removeClass("IncreaseFont", function() {
                $(this).css("color", "red");
            });

        });

        $("#outline").toggleClass("imgcontainer", function() {



        });

    




});
