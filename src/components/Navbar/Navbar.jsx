import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h2>My Quiz!</h2>
      <a target='_blank' href="https://github.com/khushippn">Github</a>
    </div>
  )
}

export default Navbar
