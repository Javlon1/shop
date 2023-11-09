import * as React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../../Context/Context'
import { HeaderData, contactUs, socialLink } from '../../../../Data/Data'
import './Nav.scss'
import Img from '../../../../Assets/Img/logo.jpg'

const Nav = () => {

    const { lan, menu, setMenu } = React.useContext(Context)

    setMenu((HeaderData[menu - 1].id))


    return (
        <section className='nav'>
            <div className='container'>
                <div className='container__item1'>
                    <Link
                        className='container__item1__img'
                        to='/'>
                        <img src={Img} alt="" 
                        onClick={() => {
                            sessionStorage.setItem('menu', 1)
                        }}
                        />
                    </Link>
                    <p className='container__item1__text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque illum delectus iste, unde pariatur culpa at quod. Tempora est expedita blanditiis praesentium illo reiciendis odit ratione iste harum modi!
                    </p>
                    <ul className='container__item1__list'>
                        {
                            socialLink?.map((e) => (
                                <li
                                    className='container__item1__list__item'
                                    key={e.id}>
                                    <a
                                        href={e.link}
                                        target="_blank"
                                    >
                                        <i className={`bi bi-${e.icon}`}></i>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='container__item2'>
                    <h3 className='container__item2__title'>
                        Quick Links
                    </h3>
                    <ul className='container__item2__list'>
                        {
                            HeaderData?.map((e) => (
                                <Link className='container__item2__list__a' key={e.id} to={e.link}>
                                    <li
                                        className={`${menu === e.id ? 'container__item2__list__a__item active' : 'container__item2__list__a__item'}`}
                                        onClick={() => {
                                            setMenu(e.id)
                                            sessionStorage.setItem('menu', e.id)
                                        }}
                                    >
                                        <i className="bi bi-chevron-right"></i>
                                        {e[`nav_${lan}`]}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className='container__item3'>
                    <h3 className='container__item3__title'>
                        Contact Us
                    </h3>
                    <ul className='container__item3__list'>
                        {
                            contactUs?.map((e) => (
                                <li key={e.id}>
                                    <Link
                                        to={e.tel ? `tel:${e.tel}` : e.email ? `mailto:${e.email}` : e.link}
                                        target="_blank"
                                    >
                                        <i className={`bi bi-${e.icon}-fill`}></i>
                                        {e.text}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Nav;