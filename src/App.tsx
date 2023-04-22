import nodeLogo from './assets/node.svg'
import {useState} from 'react'
import Update from '@/components/update'
import 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import {appBackground, defaultTextColor} from "components/Navbar/theme/colors";

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
    // const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Container className={'App'}></Container>
                <Route path="/test" element={<MyNavbar/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App
