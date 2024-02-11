import styles from './Planos.module.css'

export default function Planos() {
    return (
        <>
            <div className={styles.myAppContainer3}>
                <section className={styles.spaceCanvas}>
                        <h2>Nossos Planos</h2>
                        <p>A Connect tem o plano certo para você</p>
                    <div className={styles.planos}>
                        <div className={styles.plano}>
                            <h3>250MB</h3>
                            <ul>
                                <li>Wifi Grátis</li>
                                <li>Internet 100% fibra</li>
                                <li>Instalação Grátis</li>
                            </ul>
                            <h4>R$79,90</h4>
                            <button>Quero esse</button>
                        </div>
                        <div className={styles.plano}>
                            <h3>250MB</h3>
                            <ul>
                                <li>Wifi Grátis</li>
                                <li>Internet 100% fibra</li>
                                <li>Instalação Grátis</li>
                            </ul>
                            <h4>R$79,90</h4>
                            <button>Quero esse</button>
                        </div>
                        <div className={styles.plano}>
                            <h3>250MB</h3>
                            <ul>
                                <li>Wifi Grátis</li>
                                <li>Internet 100% fibra</li>
                                <li>Instalação Grátis</li>
                                <li>Sem limite de dados</li>
                            </ul>
                            <h4>R$79,90</h4>
                            <button>Quero esse</button>
                        </div>
                        <div className={styles.plano}>
                            <h3>250MB</h3>
                            <ul>
                                <li>Wifi Grátis</li>
                                <li>Internet 100% fibra</li>
                                <li>Instalação Grátis</li>
                                <li>Sem limite de dados</li>
                                <li>Backup de Conexão Redundante</li>
                            </ul>
                            <h4>R$79,90</h4>
                            <button>Quero esse</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}