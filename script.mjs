// An alternative to avoid adding the “type”: “module” line in your package.json file, rename your app.js file to app.mjs.
import { v4 as uuidv4 } from 'uuid';
import chalk from 'chalk';
import moment from 'moment';
import axios from 'axios'
import http from 'http'
import _ from 'lodash'
import * as fs from 'fs';

http
.createServer((req, res) => {
    
axios
.get("https://randomuser.me/api/?inc=name")
.then((data) => {


let results = data.data.results;
let momentDepe = moment().format('MMM Do YY')
let id = uuidv4().slice(0,6)

let nombre = `Nombre: ${results[0].name.first} - Apellido: ${results[0].name.last} ID: ${id} - Timestamp: ${momentDepe}`
console.log(chalk.blue(nombre));

//Almacenando la ruta en un variable 

const path = './archivo.txt'

if (fs.existsSync(path)) {
    fs.appendFile('archivo.txt', nombre, (err, data) => {
        if (err) {
            console.log('El archivo no esta correcto')
        } else {
            console.log('El archivo se actulizo correctamente')
        }
    })
} else {
    fs.writeFile('archvio.txt','',(err, data) => {
        if (err) {
            console.log('Error: el archivo no se pudo crear ')
        } else {
            console.log('El archivo se ha creado exitosamente')
        }
    })
}

console.log(fs.readFile('archivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error: No se pudo leer el archivo')
   } else {
        console.log(chalk.blue.bgWhite(data))
   }
 }))

 let arrayFile=[fs.readFile('archivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error: No se pudo leer el archivo')
    } else {
        console.log(chalk.blue.bgWhite(data))
    }
 })]
 _.each(arrayFile, function (value, key) {
    console.log(value)
})

})

.catch((e) => {
console.log(e);
});
}).listen(3000,()=>console.log('Server ON'))
