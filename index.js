var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/api')



var db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
  var userSchema = mongoose.Schema({
    name: String,
    password: String,
    age: String
  })

  var user = mongoose.model('user', userSchema);
  // cat 是实际数据库中记录的名字
  var peter = new user({ name: 'pppeter', password: '111', age: '33' });
  // 成功构建一条数据记录
  peter.save()


  peter.name = 'peterpeter'
  peter.password = 'aaabbb'
  peter.save()


  user.find().exec(function(err, users) {
    // 异步执行
    console.log(users);
  });
})
