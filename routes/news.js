const express = require('express');
const router = express.Router();
const dbConnection = require('../config/dbConnection')

const connection = dbConnection()

/* GET users listing. */
router.get('/', function(req, res, next) {
    let sql = ''
    if(req.query.page){
        sql = 'SELECT * FROM news LIMIT '+((req.query.page * 4)+(1*req.query.page))+',5'
    }else{
        sql = 'SELECT * FROM news LIMIT 0,5'
    }
    connection.query((sql), (error, result) => {
        res.render('news/news.ejs', {
            news: result,
            page: req.query.page
        })
        console.log(req.query.page)
    })
});

router.post('/', function(req, res, next) {

    console.log(req.body)
    const {title, news} = req.body
    connection.query('INSERT INTO news SET?', {
        title,
        news
    }, (error, result) => {
        res.redirect('/news')
    })
});

module.exports = router;
