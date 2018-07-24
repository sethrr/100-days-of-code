let input = $("input[type='text']");

input.on("keypress", function(event){
    if(event.which === 13 && input[0].value){
        let todo = $(this).val();
        addTodo(todo);
        $(this).val("");
    }
});

$(".todo-area").on("click", "p", function(){
	$(this).toggleClass("todo-done");
})

$(".todo-area").on("click", ".fa-trash-alt", function(){
    $(this).parent().remove();
});

function addTodo(todo){
    $(".todo-area").append("<section class=\"todo\"><i class=\"\"></i><p>"+ todo + "</p></section>");
}