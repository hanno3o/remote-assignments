import { useState } from 'react'

import Nav from './components/Nav'
import Cover from './components/Cover'
import Session from './components/Session'
import './index.css'



const Home = (props) => {
    const [text, setText] = useState('Hava a Good Time!')

    return <div>
        <Nav />
        <Cover coverText = {text} setText={setText}/> 
        <Session />
    </div>
}

export default Home