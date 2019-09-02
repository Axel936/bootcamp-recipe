




const showRecipes = function () {
    let input = $("#input").val()
    $.get(`/recipes/${input}` ,function(listOfRecipes) {
    
    console.log(` I got ${listOfRecipes[0].strArea}, soo yeah hoes`)
    
    let source = $("#something-template").html()
    let template = Handlebars.compile(source)
    let someHtml = template({ key:listOfRecipes})
    $("div").append(someHtml)
})
}

