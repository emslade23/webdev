// Check off specific to dos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on x to delete a to do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(700, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event)
{
	if (event.which === 13)
	{
		//grabbing new to do text from input
		var todotext = $(this).val();
		$(this).val(" ");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ todotext + "</li>");
	}
});

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();
});