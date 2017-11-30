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
      "buttons": ["안에서!", "밖에서!"]
  };

  res.set({
      'content-type': 'application/json'
  }).send(JSON.stringify(menu));
});


//message
router.post('/message', (req, res) => {
    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };

    let massage = {
        "message": {
            "text": '뭘먹을지 선택하세요...'
        },
        "keyboard": {
            "type": "buttons",
            "buttons": [
                "한식",
                "일식",
                "중식"
            ]
        }
    };
    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(massage));
});
module.exports = router;
