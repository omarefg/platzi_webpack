import React, { useState } from 'react'
import Loader from './loader'
import data from './data.json'

function App () {
    const [loadersList, setLoadersList] = useState([])

    function handleClick (event) {
        loadersList.length ? setLoadersList([]) : setLoadersList(data.loaders)
    }

    return (
        <div>
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