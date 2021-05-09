var mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(function(result){
    console.log('Connected to DB sucessfully !!!');
}).catch(function(err){
    console.log('Connection to DB failure !!!', err)
});

