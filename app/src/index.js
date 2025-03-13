import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Primeiro from './components/basic/Primeiro'

const tag = <strong>Olá react!</strong> 

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
    </div>,
    document.getElementById('root')
)
