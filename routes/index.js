var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//초기 상태 get
router.get('/keyboard', function(req, res){

  const menu = {
      "type": 'buttons',
      "buttons": ["뭐먹을래"]
  };

  res.send(menu);
});


//message
router.post('/message', (req, res) => {
    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };
    console.log(_obj.content);
    console.log(typeof(_obj.content));
    if(_obj.content ==  '뭐먹을래')
      console.log("hello");
    if(JSON.stringify(_obj.content) == '뭐먹을래')
      console.log("hello2");
    let message = {
      "keyboard": {
          "type": "buttons",
          "buttons": [
              "1",
              "2",
              "3"
          ]
      },
      "message": {
          "text": '안녕하세여'
      },
    };
    res.send(message);

});
module.exports = router;
