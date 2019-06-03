import '../css/reset.scss'
import {test} from './test'
 
const div = document.createElement('div');
console.log(test);
div.innerHTML = test()
document.body.appendChild(div)

console.log("3333333")