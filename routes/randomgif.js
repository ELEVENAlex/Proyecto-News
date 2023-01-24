const express = require('express');
const axios = require('axios');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
    const response = await axios.get("https://api.giphy.com/v1/gifs/random?apikey=pBg2suDqN394DyRM8jojqN7C1eAk2kTC")
    res.render('randomgif', {gif: response.data.data.images.downsized_medium.url});
    console.log(response.data.data)
});

module.exports = router;
