import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Video/React_routing/Pages/About'
import Contact from './Video/React_routing/Pages/Contact'
import Home from './Video/React_routing/Pages/Home'
import Main from './Video/React_routing/Pages/Main'
import NoPage from './Video/React_routing/Pages/NoPage'
import Service from './Video/React_routing/Pages/Service'

const App2 = () => {
    return (
        <div>

            <Routes>

                    <Route path="/" element={<Main />}/>
                    <Route path='/home' element={<Home />} />


                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='*' element={<NoPage />} />

            </Routes>

         
            

        </div>
    )
}

export default App2