import React, { useState } from 'react'
import Loader from './loader'
import data from './data.json'
import logo from '../../assets/images/platzi.png'
import video from '../../assets/videos/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

function App () {
    const [loadersList, setLoadersList] = useState([])

    async function handleClick () {
        loadersList.length ? setLoadersList([]) : setLoadersList(data.loaders)
        const { alerta } = await import('./alert')
        alerta('OMG, este módulo ha cargado dinámicamente')
    }

    return (
        <div>
            <p className="sass">Esto es sass</p>
            <p className="less">Esto es less</p>
            <p className="styl">Esto es stylus</p>
            <p className="post-css">Esto es postcss</p>
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