var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
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
  // var peter = new user({ name: 'pppeter', password: '111', age: '33' });
  // // 成功构建一条数据记录
  // peter.save()


  user.findById({_id: '57ecbcdf4d95146106254fe0'}, function(err, user) {
    user.name = 'rrrrr'
    user.save(function(err){
      console.log('更新了！')
    });
  });

  console.log("我先出来了")




  // user.find().exec(function(err, users) {
  //   // 异步执行
  //   console.log(users);
  // });
})
