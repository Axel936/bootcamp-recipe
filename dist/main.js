
let render = new renderer()



const showRecipes = function () {
    let input = $("#input").val()
    $.get(`/recipes/${input}` ,function(listOfRecipes) {
    
        render.render(listOfRecipes)
})
}

