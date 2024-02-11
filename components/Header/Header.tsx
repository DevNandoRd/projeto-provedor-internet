"use client"
import React from 'react';
import styles from '../Header/Header.module.css'
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import Menu from '../Menu/Menu';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [toggle, setToggle] = useState(false)
    const openToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className={styles.myAppContainer1}>
                <header className='space-canvas'>
                    <div>
                        <Image
                        src={"/assets/Logo-azul.png"}
                        alt='connect'
                        width={232}
                        height={84}
                        className={styles.logo}
                        />
                    </div>
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