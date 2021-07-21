const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

//Schema


// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
      //return Recipe.deleteMany()
  })
  .then(() => {
    
    // // // //Iteration 2 : Create one Recipe
    //  Recipe.create(data[0])
    //     .then((injectedRecipe)=>{console.log('Succesful Injection');console.log(injectedRecipe.title)})
    //     .catch((error)=>{console.log(error)});

   // Iteration 3
      //  Recipe.insertMany(data)
      //  .then((injectedRecipes)=>{
      //    injectedRecipes.forEach(element => { console.log(element.title);});
      //  })
      // .catch((error)=>{console.log(error)});

      //ITeration 4
      // Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"},{duration:100})
      //   .then((updatedRecipe)=>{console.log("update succeded"); console.log(updatedRecipe.duration)})
      //   .catch((error)=>(console.log(error)))

      //ITeration 5
      // Recipe.deleteOne({title: "Carrot Cake"})
      // .then(()=>{console.log("Succesfull Deletion");})
      // .catch((error)=>{console.log(error)})

      mongoose.connection.close();
     })

    
  .catch((error) => {
    console.error('Error connecting to the database', error);
  })
