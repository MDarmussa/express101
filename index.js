//creating express server
const express = require('express'); //import the express module using require()
const database = require('mime-db');
const app = express(); //call the express() function and store the result in the app variable
const port = 3000; 

//Basic Routing
app.get('/', (req, res) => { //get: it retrieves only data
     res.send('Hello express')
})
app.post('/', function (req, res) {
     res.send('Got a POST request')
   })
app.put('/user', function (req, res) {
     res.send('Got a PUT request at /user')
})
app.delete('/user', (req, res) => {
     res.send('Got a DELETE request at /user')
   })
app.get('/this_is_cool', (req, res) => {
     res.send('this_is_cool!')
})

//rendering our route to the browser
app.listen(port, () => {
     console.log(`Example app listen on port http://localhost:${port}`)
})

//Serving static route in express 
//how to run: http://localhost:3000/db.js or kitty.jpg 
app.use(express.static('public'))


//retrieve data from a database // import db from this route 
//You can omit the .js because Node assumes you are working with JavaScript files. 
// console.log(friendsArray) //for test only / print db

app.get('/friends', (req, res) => { //retrieve the data in unordered list
     let htmlData =
     `<ul>` 
          for(let friend of friendsArray) {
               htmlData += 
               `<li>
                    <a href='/friends/${friend.handle}'>${friend.name}</a>
               </li>`
          }
          htmlData += `</ul>`
          res.send(htmlData);
     `</ul>`
});
app.get('/friends/:handle', (req, res) => { //finding a friend by handle
     const {handle} = req.params;
     console.log('handle is ', handle);
     const friend = friendsArray.find(friend => friend.handle === handle);
     // console.log(friend)

     if(friend) {
          let htmlData = ``;
          htmlData += `<h1>${friend.name}</h1>`;
          htmlData += `<h2>${friend.handle}</h2>`;
          htmlData += `<h2>${friend.id}</h2>`;
          res.send(htmlData)


     } else {
          res.status('the error is' + 404)
          res.send(`No friends with handle ${handle}`)       

     }
})