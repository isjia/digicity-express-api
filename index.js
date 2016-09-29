var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/digicity-express-api')



var db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
  var personSchema = mongoose.Schema({
   name: String
  })

  var person = mongoose.model('pppp', personSchema);
  var peter = new person({ name: 'Peter' });
  console.log(peter.name);
  // 成功构建一条数据记录
})
