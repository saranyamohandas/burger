$(document).ready(function(){
    $("#userInp").on("click",function(event){
        event.preventDefault();
        var newBurger = $("#addBurger").val().trim();
        $("#addBurger").val("");
        console.log("new burger -",newBurger);
        $.ajax("/api/burgers",{
            type: "POST",
            data : {name : newBurger}
        }).then(function(){
            console.log("New burger added!");
            location.reload();
        })
    });

    $(".devourBtn").click(function(){
        var getId = $(this).attr("data-id");
        
        $.ajax("api/burgers/" + getId,{
            type: "PUT",
            data : {devoured : true}
        }).then(function(){
            location.reload();
        })
        console.log("devoured" ,getId);
        
    });
    
    
});