import React from 'react';
import s from './Music.module.css';
import { AudioPlayerProvider } from "react-use-audio-player"
import AudioPlayer from "./AudioPlayer";
import { arrayShift } from 'redux-form';


const Music = () => {
    return (
        <div>
            Music + {withoutRepeater(arr)}


        </div>

    )
}

const arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 6 ,6, 7, 8, 9, 9, 9, 9]

let withoutRepeater = (arr) => {
    const uniqueValues = [];
    const obj = {};

    for(let i=0; i < arr.length; i++) {
        const currentItem = arr[i];
       if(!(currentItem in obj)) {
           obj[currentItem] = 0;

       } else {
           obj[currentItem] += 0;
       }
    }
    const keys = Object.keys(obj);
    keys.forEach(key => {
        if (obj[key] === 0) {
            uniqueValues.push(key)
        }
    })
 return uniqueValues;
}

const a = [1,2,3,4,5,6];

for (let i = 0; i <= a.length; i++) {
    let b = [];
    a.map(e => {
     b.push(e)
    })
    console.log(b)
    
}



/*let types = () => {
    console.log('30' * '2')
}

types()*/


/*let a = 42;
let b = a;
b++;

console.log(b)*/

/*let a = [1,2,3];
let b = a;

let c = [1,2,3,4,5,6];

b.push(4,5,6);
console.log('a', a)
console.log('b', b)

if (a === b) {
    console.log('c', c)
}

console.log(a===c)*/

/*function funcA () {
    let a = 1;
    function funcB () {
        let b = 2;
        function funcC () {
            let c = 3;
            console.log('funcC', a,b,c)
        }
        funcC();
        console.log('funcB', a,b)
    }
    funcB();
    console.log('funcA', a)
}

funcA();*/
/*
console.log(summ(2,5))
function summ(a,b) {
    return a + b;
}
*/

/*console.log(square(5));
/!*function square (numm) {
    return numm**2

}*!/
 let square = function(numm) {
     return numm**2

 }*/

/*
function heyHello (name) {
    const message = 'Hello to' + ' ' + name;

    return function () {
        console.log(message)
    }
}

let helloToElena = heyHello('Elena')
let helloToIgor = heyHello('Igor')
helloToElena()
helloToIgor()
*/

/*function createFrameworkManager () {
    const fw = ['angular', 'react']
    return {
        print: function () {
            console.log(fw.join(' '))
        },
        add: function (framework) {
            fw.push(framework)

        }

    }
}

const manager = createFrameworkManager();

manager.add('vue')
manager.print()


const fib = [1,2,3,5,8,13]
for(var i = 0; i < fib.length; i++) {
    (function (j){
        setTimeout(function (){
            console.log(`fib [${j}] = ${fib[j]}`)

        } ,3000)
    })(i)
}*/


/*
let result = [];
for (var i = 0; i < 5; i++) {
    (function (j){
        result.push(
            function () {
                console.log(j)
            }

        )
    })(i)

}

result[4]()
*/

/*const person = {
    surname: 'Stark',
    knows: function (what, name) {
        console.log(`You ${what} know ${name} ${this.surname}` )

    }
}

const john = { surname: 'Snow'}

person.knows('anything', 'Bran')
setTimeout(function (){
    person.knows.apply(john, ['nothing', 'john'])
},2500)*/








export default Music;