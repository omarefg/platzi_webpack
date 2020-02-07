import React, { useState } from 'react'
import Loader from './loader'
import data from './data.json'
import logo from '../../assets/images/platzi.png'
import video from '../../assets/videos/que-es-core.mp4'

function App () {
    const [loadersList, setLoadersList] = useState([])

    function handleClick (event) {
        loadersList.length ? setLoadersList([]) : setLoadersList(data.loaders)
    }

    return (
        <div>
            <div>
                <img src={logo} width="300px"/>
            </div>
            <div>
                <video src={video} controls poster width="300px"/>
            </div>
            <ul>
                {loadersList.map(loader => (
                    <Loader
                        {...loader}
                        key={loader.id}
                    />
                ))}
            </ul>
            <button
                onClick={handleClick}
            >
                Mostrar los loaders
            </button>
        </div>
    )
}

export default App