const asciiCats = require('ascii-cats')



let name = "Shayanne"

console.log (`hey ${name}, I am Node`)


function getTime (){
    return new Date()


}    

console.log (`The date is ${getTime}`)


// run new package/

const myCatAsciiImage = asciiCats()
console.log(myCatAsciiImage)