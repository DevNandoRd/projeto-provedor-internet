import Planos from '@/components/Planos/Planos'
import styles from '../planos/planos.module.css'

export default function NossosPlanos() {
    return (
        <>
        <div className={styles.pgInternas}>
            <h2>Nossos Planos</h2>
        </div>

        <div className={styles.myAppContainer}>
            <Planos/>
        </div>
        </>
    )
}