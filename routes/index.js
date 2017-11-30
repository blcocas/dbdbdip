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
      "buttons": ["이홍재"]
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

  let message = {
      "message": {
          "text": '홍재님은 천재님입니다. 인정하십니까?.'
      },
      "keyboard": {
          "type": "buttons",
          "buttons": [
              "맞다",
              "인정한다",
              "반박할 수 없다"
          ]
      },
      "message": {
          "text": '후훗 당신도 인정하는군요? 그럴줄 알았습니다.'
      },
  };
    /*
    if(_obj.content == '이홍재') {
      let message = {
          "message": {
              "text": '홍재님은 천재님입니다. 인정하십니까?.'
          },
          "keyboard": {
              "type": "buttons",
              "buttons": [
                  "맞다",
                  "인정한다",
                  "반박할 수 없다"
              ]
          },
          "message": {
              "text": '후훗 당신도 인정하는군요? 그럴줄 알았습니다.'
          },
      }
    };
    if(_obj.content == '박가영') {
      let message = {
          "message": {
              "text": '바까영은 바보다. 인정하십니까?.'
          },
          "keyboard": {
              "type": "buttons",
              "buttons": [
                  "맞다",
                  "인정한다",
                  "반박할 수 없다"
              ]
          },
          "message": {
              "text": '후훗 당신도 인정하는군요? 그럴줄 알았습니다.'
          },
      }
    };
    */
    res.send(message);
});
module.exports = router;
