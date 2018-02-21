
    $("#clickme").click(function() {

        $("#grow").addClass("IncreaseFont", function() {
            $("#grow").css("color", "blue").removeClass("IncreaseFont", function() {
                $(this).css("color", "red");
            });

        });

        $("#outline").toggleClass("imgcontainer", function() {



        });

    




});
