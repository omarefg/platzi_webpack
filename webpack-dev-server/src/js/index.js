import '../css/index.css'
import addText from './add-text'

addText()

if (module.hot) {
    module.hot.accept('./add-text.js', function () {
        addText()
    })
}

