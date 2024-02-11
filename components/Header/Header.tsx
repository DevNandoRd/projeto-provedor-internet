"use client"
import React from 'react';
import styles from '../Header/Header.module.css'
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import Menu from '../Menu/Menu';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [toggle, setToggle] = useState(false)
    const openToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className={styles.myAppContainer1}>
                <header className='space-canvas'>
                    <div><Link href='/'><img src='/assets/Logo-azul.png' alt="Connect" className={styles.logo}/></Link></div>
                    <div className={styles.menu}>
                        <Menu/>
                    </div>
                    <div className={styles.botao}>
                        <button><span><FaUser /></span> Central do assinante</button>
                    </div>
                    <div className={styles.menuMobile}>
                        <button onClick={openToggle}>
                            {toggle ? <RxDropdownMenu/> : <IoMenu /> }
                        </button>
                        <div className={toggle ? styles.visivel : styles.invisivel}>
                            <Menu/>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}