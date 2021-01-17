const express = require('express') ;
const app = express() ;


const port = 3000 ;

app.get('/', function(req, res) {
    return res.send('Hello hi there!') ;
})

app.listen(port, function() {
    console.log(`Server running at port ${port}`);
})