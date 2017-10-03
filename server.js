const express = require('express');
const port = process.env.PORT || 3330;
const path = require('path');
const app = express();

app.use(express.static(path.join('public')));

app.listen(port, ()=>{
  console.log(`app listening on port ${port}`);
})

module.exports = app;
