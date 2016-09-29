var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/digicity-express-api')



var db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
  var catSchema = mongoose.Schema({
   name: String
  })

  var cat = mongoose.model('cat', catSchema);
  // cat 是实际数据库中记录的名字
  var kitty = new cat({ name: 'HooKitty' });
  console.log(kitty.name);
  // 成功构建一条数据记录
  kitty.save()
})
