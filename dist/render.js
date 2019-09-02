class renderer {
    constructor() {

    }
    render(listOfRecipes){
        console.log(`render.helloworld`)
    
        let source = $("#something-template").html()
        let template = Handlebars.compile(source)
        let someHtml = template({ key:listOfRecipes})
        $(".container").append(someHtml)
    }

}