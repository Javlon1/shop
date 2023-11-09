import * as React from 'react'
import './Footer.scss'
import Nav from './nav/Nav'
import Newsletter from './newsletter/Newsletter'

export default function Footer() {
  return (
    <footer className='footer'>
      <Newsletter />
      <Nav/>
    </footer> 
  )
}
