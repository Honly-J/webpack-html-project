import '../css/reset.css'
import '../css/style.scss'
import  test from './test'
 
const div = document.createElement('div');
console.log(test);
div.innerHTML = test()
document.body.appendChild(div)
const a = () => '5555555'
console.log(a())