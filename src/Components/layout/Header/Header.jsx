import * as React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import { HeaderData, Lang } from '../../../Data/Data'
import Language from './Language/Language';
import { Context } from '../../../Context/Context';
import logo from '../../../Assets/Img/logo.jpg'
import Mony from './Mony/Mony';

export default function Header() {

  const { lan, menu, setMenu } = React.useContext(Context)
  const [scrol, setScrol] = React.useState(false)
  const [nav, setNav] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const offSet = 80;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  setMenu(HeaderData[menu - 1].id)

  return (
    <header className={scrol ? 'header' : 'header'}>
      <div className="header__top">
        <div className="container">
          <ul className="container__list">
            <li className="container__list__item">
              <a href="#"><i className="bi bi-telegram"></i></a>
            </li>
            <li className="container__list__item">
              <a href="#"><i className="bi bi-instagram"></i></a>
            </li>
            <li className="container__list__item">
              <a href="#"><i className="bi bi-github"></i></a>
            </li>
          </ul>
          <p>Welcome to Jonny's store</p>
          <div className="container__div">
            <Mony />
            <Language />
          </div>

          <div className="w">
            <div className="w__profil">
              <div className='w__profil__dropdown'>
                <div onClick={() => setOpen(!open)}>
                  <i className="bi bi-person-circle"></i>
                  <span>Account</span>
                </div>
                <ul className={open ? 'open__menu' : ''}>
                  <li>
                    <a href="">
                      Register
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a href="">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <a className='w__profil__a'>
                <i className="bi bi-heart"></i>
                <span className="w__profil__a__counter">0</span>
                <span className='w__profil__a__text'>wishlist</span>
              </a>
              <a className='w__profil__a'>
                <i className="bi bi-bag-dash"></i>
                <span className="w__profil__a__counter">0</span>
                <span className='w__profil__a__text'>Cart</span>
              </a>
            </div>
            <div onClick={() => setNav(!nav)} className={nav ? 'w__btnHam active-Ham' : 'w__btnHam'}></div>
          </div>

        </div>
      </div>
      <div className="header__center">
        <div className="container">
          <a href='#'
            onClick={() => {
              sessionStorage.setItem('menu', 1)
              setMenu(1)
            }}>
            <img className='container__logo' src={logo} alt="" />
          </a>

          <div className="container__search">
            <form action="">
              <div> 
                <select defaultValue="all" name="">
                  <option value="all" disabled>All</option>
                  <option value="cloths">Cloths</option>
                  <option value="bag">Bag</option>
                  <option value="shoes">Shoes</option>
                </select>
              </div>
              <input placeholder="Search products..." type="text" />
              <button type='submit'><span>Search</span><i className="bi bi-search"></i></button>
            </form>
          </div>

          <div className="container__profil">
            <a className='container__profil__a'>
              <i className="bi bi-heart"></i>
              <span className="container__profil__a__counter">0</span>
              <span>wishlist</span>
            </a>
            <a className='container__profil__a'>
              <i className="bi bi-bag-dash"></i>
              <span className="container__profil__a__counter">0</span>
              <span>Cart</span>
            </a>

            <div className='container__profil__dropdown'>
              <div onClick={() => setOpen(!open)}>
                <i className="bi bi-person-circle"></i>
                Account
              </div>
              <ul className={open ? 'open__menu' : ''}>
                <li>
                  <a href="">
                    Register
                  </a>
                </li>
                <hr />
                <li>
                  <a href="">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <nav className='container__nav'>
            <ul className='container__nav__list'>
              {
                HeaderData?.map((e) => (
                  <a key={e.id} href={e.link}>
                    <li className={`${menu === e.id ? 'container__nav__list__item active' : 'container__nav__list__item'}`}
                      onClick={() => {
                        setMenu(e.id)
                        sessionStorage.setItem('menu', e.id)
                      }}>
                      {e[`nav_${lan}`]}
                    </li>
                  </a>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
      <div className={nav ? 'header__mobile active-nav' : 'header__mobile'}>
        <div className="containerr">
          <nav className='containerr__nav'>
            <ul className='containerr__nav__list'>
              {
                HeaderData?.map((e) => (
                  <a key={e.id} href={e.link}>
                    <li className={`${menu === e.id ? 'containerr__nav__list__item active' : 'containerr__nav__list__item'}`}
                      onClick={() => {
                        setMenu(e.id)
                        sessionStorage.setItem('menu', e.id)
                      }}>
                      {e[`nav_${lan}`]}
                    </li>
                  </a>
                ))
              }
            </ul>
          </nav>
          <div className="containerr__bottom">
            <ul className="containerr__bottom__list">
              <li className="containerr__bottom__list__item">
                <a href="#"><i className="bi bi-telegram"></i></a>
              </li>
              <li className="containerr__bottom__list__item">
                <a href="#"><i className="bi bi-instagram"></i></a>
              </li>
              <li className="containerr__bottom__list__item">
                <a href="#"><i className="bi bi-github"></i></a>
              </li>
            </ul>
            <div className="containerr__bottom__div">
              <Mony />
              <Language />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}