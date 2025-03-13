import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import First from './components/basic/First'
import ComParametro from './components/basic/ComParametro'
import Fragment from './components/basic/Fragmento'

const tag = <strong>Olá react!</strong> 
ReactDom.render(
    <div id="app">
        <First></First>
        <ComParametro 
            titulo="Situação do Aluno" 
            subtitulo="Lopez" 
            nota={9.3} />
            <Fragment/>
    </div>,
    document.getElementById('root')
)
