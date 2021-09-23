const express = require('express');
const path = require('path');
const app = express();

//setup static and middleware
app.use('/public', express.static('public')) // For serving static files


// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //Set the views directory

// app.get('/',(req,res)=>{
//     //can be used to deliver files(like., Html)
//     res.sendFile(path.join(__dirname,'index.html'))
// })
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})
// or we can directly transfer the html file to public and it will remain same

// app.get('/about',(req,res)=>{
//     res.send('This is About page');
// })

// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>resources not found</h1>');
// })

app.listen(5000,()=>{
    console.log('server is listening at port 5000..')
})