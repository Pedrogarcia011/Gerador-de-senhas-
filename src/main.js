import { nanoid } from 'nanoid'
import "./style.css"

const bottonEl = document.querySelector('button')
const scriptEl = document.querySelector('#subscript')

bottonEl.addEventListener('click', script)

function script (){
    scriptEl.innerHTML = nanoid();
}