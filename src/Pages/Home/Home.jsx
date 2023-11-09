import * as React from 'react'
import About from '../../Components/Page/Home/About/About'
import Intro from '../../Components/Page/Home/Intro/Intro'
import './Home.scss'

const Home = () => {
    return (
        <section className='home'>
            <Intro />
            <About/>
        </section>
    )
}

export default Home;