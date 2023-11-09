import * as React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import './AllIntro.scss'


export default function AllIntro({ title, text }) {
    const { setMenu } = React.useContext(Context)
    return (
        <section className='allIntro'>
            <div className='container'>
                <h1>{text}</h1>
                <span>
                    <Link onClick={() => {
                        setMenu(1)
                        localStorage.setItem('menu', 1)
                    }} to='/'>
                        Home
                    </Link>
                    <i className='bi bi-arrow-right-short'></i>
                    <p>{title}</p>
                </span>
            </div>
        </section>
    )
}
