var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Nicholas",
    added: new Date()
  },
  {
    text: "I enjoy the pizza",
    user: "Dylan",
    added: new Date()
  },
  {
    text: "I am currently getting a vasectomy",
    user: "Jordan",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages } );
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: "New Message" } );
});


router.post("/new", (req, res) => {

  const user_message = req.body.message
  const user_name = req.body.name
  messages.push({text: user_message, user: user_name, added: new Date()});
  res.redirect('/');
});

router.post('/', (req, res) => {
  res.redirect('/new')
})

module.exports = router;
