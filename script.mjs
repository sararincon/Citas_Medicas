// An alternative to avoid adding the “type”: “module” line in your package.json file and instead rename your app.js file to app.mjs.
import { v4 as uuidv4 } from 'uuid';
import chalk from 'chalk';
import moment from 'moment';
import axios from 'axios'

axios
.get("https://randomuser.me/api/?inc=name")
.then((data) => {

let results = data.data.results;
let momentDepe = moment().format('MMM Do YY')
let id = uuidv4().slice(0,6)

let nombre = `Nombre: ${results[0].name.first} - Apellido: ${results[0].name.last} ID: ${id} - Timestamp: ${momentDepe}`
console.log(chalk.blue(nombre));



})

.catch((e) => {
console.log(e);
});

// const consulta = {
//     fecha: moment(). add(10000, 'days').format('MMM Do YY'),
//     ID: uuidv4().slice(0,6),
// }
// console.log(consulta);
// console.log(chalk.blue('Hello world!'));
// console.log(uuidv4())