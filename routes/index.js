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
      "buttons": ["안에서 먹을래", "밖에서 먹을래"]
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
  //let message = undefined;
  //console.log(_obj.content);
  //console.log(typeof(_obj.content));

  //안에서 먹을래!
  if(_obj.content ==  '안에서 먹을래'){
    console.log(_obj.content);
    let message = {
      "keyboard": {
          "type": "buttons",
          "buttons": [
              "학식",
              "기숙사식당-아침",
              "기숙사식당-점심",
              "기숙사식당-저녁",
              "교직원식당-점심",
              "교직원식당-저녁"
          ]
      },
      "message": {
        "text": '안녕하세여'
      }
    };
    res.send(message);  
  }

  //밖에서 먹을래!
  if(_obj.content ==  '밖에서 먹을래'){
    console.log(_obj.content);
    let message = {
      "keyboard": {
          "type": "buttons",
          "buttons": [
              "종류로 검색",
              "음식으로 검색"
          ]
      },
      "message": {
        "text": '안녕하세여'
      }
    };
    res.send(message);  
  }
  res.send(message);
  //밖 > 종류
  if(_obj.content ==  '종류로 검색'){
    console.log(_obj.content);
    let message = {
      "keyboard": {
          "type": "buttons",
          "buttons": [
              "한식",
              "일식",
              "중식",
              "양식",
              "기타"
          ]
      },
      "message": {
        "text": '안녕하세여'
      }
    };
    res.send(message);  
  }
  res.send(message);
  //밖 > 음식
  if(_obj.content ==  '음식으로 검색'){
    console.log(_obj.content);
    let message = {
      "keyboard": {
          "type": "text"    
      },
      "message": {
        "text": '안녕하세여'
      }
    };
    res.send(message);  
  }
  

  

});
module.exports = router;
