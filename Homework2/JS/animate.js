
    $("#clickme").click(function() {

        $("#grow").addClass("IncreaseFont", function() {
            $("#grow").css("color", "blue").removeClass("IncreaseFont", function() {
                $(this).css("color", "red");
            });

        });

        $("#addBorder").toggleClass("imgcontainer", function() {



        });

    




});
