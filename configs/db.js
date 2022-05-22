const mongoose = require('mongoose')

const url = `mongodb+srv://ponleur123:ponleur@cluster0.jwjre.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = () =>{
  const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}
    mongoose.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to the database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })

}

   
// const mongoose = require('mongoose');
// const url = `mongodb+srv://ponleur:ponleur@cluster0.jwjre.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// module.exports = async () => {
//   try {
//     await mongoose.connect(url, {
//       autoIndex: true,
//       serverSelectionTimeoutMS: 30000 // default 30 seconds
//     });
//     console.log("MongoDB connected~");
//   } catch (err) {
//     console.log("Mongoose: ",err);
//   }
// }
