var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

//
app.all('/', (req, res) => {
  res.send(`
    <!DOCTYPE html >
    <html>
      <head>
        <title>Activity Tinder</title>
      </head>
      <body>
        <div>
          <h1> This is for Activity Tinder</h1>
          <div ui-view></div>
          <script src="bundle.js"></script>
        </div>
      </body>
    </html>
    `)
});


app.listen(PORT, () => {
  console.log('Server is listening of port ' + PORT);
});





