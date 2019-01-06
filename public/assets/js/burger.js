$(document).ready(function(){
    $("#userInp").on("click",function(event){
        event.preventDefault();
        var newBurger = $("#addBurger").val().trim();
        if(!newBurger){
            $("#myModal").modal("show");
        } else {
            
          console.log("new burger -",newBurger);
          $.ajax("/api/burgers",{
                type: "POST",
                data : {name : newBurger}
            }).then(function(){
                console.log("New burger added!");
                $("#addBurger").val("");
                location.reload();
            })  
            }
        
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