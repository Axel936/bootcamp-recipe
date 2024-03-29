const express = require("express");
const path = require("path");
const app = express();
const request = require("request");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));





app.get("/recipes/:ingredient", function(requ, response) {
	let req = requ.params.ingredient
	request(`https://recipes-goodness.herokuapp.com/recipes/${req}`, function(err, res, body){
  let unwrangledData = JSON.parse(body)
  let recipes = unwrangledData.results
  response.send(recipes)
})

	
});

const port = 8080;
app.listen(port, function() {
  console.log(`Running server on port ${port}`);
});
