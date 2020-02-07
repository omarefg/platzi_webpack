import '../css/index.css'
import search from './search'
import render from './render'

const id = prompt('¿Quien es ese pokemon?')

search(id)
.then(data => {
    render(data)
})
.catch(error => {
    console.log('no hubo pokemon')
})

