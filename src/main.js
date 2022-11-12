import { nanoid } from 'nanoid'
import "./style.css"
import copy from 'clipboard-copy';

const bottonEl = document.querySelector('button')
const scriptEl = document.querySelector('#subscript')

bottonEl.addEventListener('click', script)

function script (){
    scriptEl.innerHTML = nanoid();
}

scriptEl.addEventListener('click', (event) => {
    copy(event.target.innerHTML)
    alert('Senha copiada!')
})