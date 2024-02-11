'use client'
import styles from '../contatos/contatos.module.css'
import { TextField, Button } from '@mui/material';
import { FaWhatsapp, FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import makeStyles from '@mui/material';

export default function Contatos() {

    return (
        <>
        
            <div className={styles.pgInternas}>
                <div>
                    <h2>Nossos Contatos</h2>
                </div>
            </div>
            <div className={styles.myAppContainer}>
                <section className='space-canvas-col'>
                    <div className={styles.informs}>
                        <h2>Estamos aqui para ajudar! Se você tiver alguma dúvida, comentário ou preocupação, não hesite em entrar em contato conosco. Nossa equipe de suporte está pronta para atendê-lo e fornecer assistência personalizada.</h2>
                        <div>
                            <p>Informações de Contato:</p>
                            <ul>
                                <li><MdPlace /> Endereço: "Rua das Conexões, 123, Bairro da Conectividade, Cidade dos Links, Estado da Conexão, CEP: 12345-678" </li>
                                <li><FaWhatsapp/> Telefone: "(00) 1234-5678"</li>
                                <li><FaEnvelope/> E-mail: "contato@connect.com"</li>
                            </ul>
                        </div>
                        <div>
                            <p>Horário de Atendimento:</p>
                            <h5>Nosso horário de atendimento é de segunda a sexta-feira, das 9h às 18h. Se você entrar em contato fora desse horário, responderemos assim que possível durante o próximo dia útil.</h5>
                        </div>
                        <div>
                            <p>Redes Sociais:</p>
                        <div className={styles.listIcons}>
                            <button><FaInstagram /></button>
                            <button><FaFacebook /></button>
                            <button><FaYoutube /></button>
                        </div>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <h4>Como podemos ajudar?</h4>
                        <form>
                            <TextField
                                label="Nome"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Telefone"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                type='phone'
                            />
                            <TextField
                                label="E-mail"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                type="email"
                                autoComplete="email"
                            />
                            <TextField
                                label="Mensagem"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                autoComplete="off"
                            />
                        </form>
                        <button>Enviar</button>
                    </div>
                </section>
            </div>
        </>
    )
}
