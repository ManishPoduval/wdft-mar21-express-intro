console.log('Yayyy node works')
/*
let {people} = require('./data.js')

console.log(people)
*/
/* 

---------------------------------------------------
----------CHALK practice
---------------------------------------------------

const chalk = require('chalk');
const log = console.log;
 
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
 
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
 
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));
 
// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

*/

/*

---------------------------------------------------
---------- Extra package practice--------------------------
---------------------------------------------------

*/
/*
let faker = require('faker');
for (let i =0; i<10; i++) {
    console.log(`${faker.commerce.productName()} $${faker.commerce.price()}`);
}
 
*/



/*
---------------------------------------------------
---------- Server with NodeJS---------------------
---------------------------------------------------

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/


/*
---------------------------------------------------
---------- Server with Express---------------------
---------------------------------------------------
*/


const express = require('express')
const app = express()

// Syntax
//app.METHOD (PATH, CALLBACK)

// Always defined the middleware for auth before the routes
/*
app.use((req, res, next) => {
    console.log('Hello')
   if (1 > 5) {
    next()
   }
   else {
        res.send('Unauthorized')
   }
}) 
 */

 // Middleware to tell express where our static files are located
app.use(express.static(__dirname + '/public'))


// handles all GET requests to '/' 
app.get('/', (req, res) => {
  //res.send('Hello Ironhackes')
  console.log(  __dirname)
  // absolute path of your html file
  res.sendFile( __dirname + '/views/landing.html')
})

// handles all GET requests to '/about' 
app.get('/about', (req, res) => {
    //res.send('Hello Ironhackers')
    res.sendFile( __dirname + '/views/about.html')
})

// handles all GET requests to '/home' 
app.get('/home', (req, res) => {
    //res.send('In home page')
    res.sendFile( __dirname + '/views/home.html')
})


app.listen(3000)