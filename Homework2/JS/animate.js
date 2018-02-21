$("document").ready(function(){
$("[type=button]").click(function(){
 
$("#header").addClass("IncreaseFont",function()
{
	$("#header").css("color","blue").removeClass("IncreaseFont",function(){$(this).css("color","red");
});

});
