import styles from '../Footer/Footer.module.css'
import { FaWhatsapp, FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <div className={styles.myAppContainer6}>
                <footer className={styles.footer}>
                    <div>
                        <Link href={'/'}><Image
                        src={'/assets/Logo.png'}
                        alt=''
                        width={232}
                        height={84}
                        /></Link>
                    </div>
                    <div>
                        <h2>Contatos</h2>
                        <h3><FaWhatsapp /> (84) 9123-4567</h3>
                        <h3><FaEnvelope /> connect@contato.com</h3>
                    </div>
                    <div>
                        <h2>Endereço</h2>
                        <h3>Connect Internet Provider<br />
                            Rua das Conexões, 123<br />
                            Bairro da Conectividade<br />
                            Cidade dos Links, Estado da Conexão<br />
                            CEP: 12345-678</h3>
                    </div>
                    <div>
                        <h2>Redes Sociais</h2>
                        <div className={styles.listIcons}>
                            <button><FaInstagram /></button>
                            <button><FaFacebook /></button>
                            <button><FaYoutube /></button>
                        </div>
                    </div>
                </footer>
            </div>
            <div className={styles.copy}>Connect© 2024 - Todos os direitos reservados</div>
        </>
    )
}