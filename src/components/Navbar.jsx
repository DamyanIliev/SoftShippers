import Link from 'next/link'
import React from 'react'
import styles from './navbar/navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
    <Link href="/" className={styles.logo}>SOFTSHIPPERS</Link>
        <div className={styles.links}>
        <Link href="/contacts">Contacts</Link>
        
        <Link href="/about">About</Link>
       
        <Link href="/portfolio">Portfolio</Link>
        
        <Link href="/blog">Blog</Link>
        </div>
    </div>
  )
}

export default Navbar
