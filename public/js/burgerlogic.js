$(function () {


    $("#submit-button").on("click", function (event) {
        event.preventDefault()
        let newBurger = {
            burger_name: $(".form-control").val(),
            devoured: 0
        }
        console.log(newBurger)
        $.ajax("/api/burger", {
            type: "PUT",
            data: newBurger
        }).then(function (response) {
            console.log(response)
        })
        location.reload()
    })

    $(".btn-secondary").on("click", function(event) {
        let id = $(this).data("id")
        console.log(id)
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: id
        }).then(function (response) {
            console.log(response)
        })
        location.reload()
    })

});