import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'

const tag = <strong>Olá react!</strong> 

ReactDom.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do Aluno" 
            subtitulo="Lopez" nota={9.3} />
    </div>,
    document.getElementById('root')
)
