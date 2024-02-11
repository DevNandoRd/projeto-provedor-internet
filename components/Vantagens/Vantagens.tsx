
import { FaWifi } from 'react-icons/fa'
import styles from '../Vantagens/Vantagens.module.css'

export default function Vantagens() {
    return (
        <>
            <div className={styles.myAppContainer4}>
                <section className={styles.spaceCanvas}>
                    <h2>Nossas Vantagens</h2>
                    <div className={styles.boxList}>
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <FaWifi />
                            </div>
                            <div>
                                <h3>Wifi 5G</h3>
                                <p>Wi-fi grátis para toda a família navegar ao mesmo tempo com a ultravelocidade da internet de fibra óptica.</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <FaWifi />
                            </div>
                            <div>
                                <h3>Wifi 5G</h3>
                                <p>Wi-fi grátis para toda a família navegar ao mesmo tempo com a ultravelocidade da internet de fibra óptica.</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <FaWifi />
                            </div>
                            <div>
                                <h3>Wifi 5G</h3>
                                <p>Wi-fi grátis para toda a família navegar ao mesmo tempo com a ultravelocidade da internet de fibra óptica.</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.boxIcon}>
                                <FaWifi />
                            </div>
                            <div>
                                <h3>Wifi 5G</h3>
                                <p>Wi-fi grátis para toda a família navegar ao mesmo tempo com a ultravelocidade da internet de fibra óptica.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}