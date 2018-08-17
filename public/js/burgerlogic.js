$(function(){
    $(".update").on("click", function(event) {
     $.ajax("/api/delete/" + id, {
         type: "DELETE",
     }).then(function (response) {
         console.log(response)
         location.reload()
     })
    })

   
    
    });