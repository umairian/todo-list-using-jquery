$(document).ready(function () { // function that would run when document is loaded
    $("#add").click(function (event) {
        event.preventDefault();
        const todo = $("#todo-input").val();
        const li = $("<li></li>");
        const btn = $("<button class='delete'>Delete</button>")
        li.html(todo);
        li.append(btn);
        btn.click(function () {
            li.remove();
        })
        $("ul").append(li);
        $("#todo-input").val("");
    });
});