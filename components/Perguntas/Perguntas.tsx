"use client"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from '../Perguntas/Perguntas.module.css'

export default function PeguntasFrequentes() {
    return (
        <>
        <div className={styles.myAppContainer5}>
            <section className={styles.spaceCanvas}>
                <h2>Perguntas frequentes</h2>
                <h3>Dúvidas Comuns sobre nossos Serviços</h3>
                <div>
                <div>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon color='primary'/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography color={'primary'}>Como posso saber se o serviço está disponível em minha área?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography >
                        <b>Resposta:</b> Você pode verificar a disponibilidade do serviço em sua área inserindo seu CEP em nossa página de cobertura ou entrando em contato com nossa equipe de suporte.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon color='primary'/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography color={'primary'}>Quais são os métodos de pagamento aceitos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <b>Resposta:</b> Aceitamos pagamentos via cartão de crédito, débito automático e transferência bancária. Entre em contato conosco para mais informações sobre métodos de pagamento alternativos.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon color='primary'/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography color={'primary'}>Qual é a velocidade da minha conexão de internet?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <b>Resposta:</b> A velocidade da sua conexão de internet depende do plano que você escolheu. Normalmente, fornecemos velocidades de download e upload de até [inserir velocidade] Mbps. Para verificar a velocidade da sua conexão, você pode fazer um teste de velocidade online ou entrar em contato com nossa equipe de suporte.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon color='primary'/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography color={'primary'}>Como faço para configurar meu roteador?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <b>Resposta:</b> A configuração do roteador pode variar dependendo do modelo do dispositivo. No entanto, geralmente fornecemos instruções detalhadas junto com o roteador. Se precisar de assistência adicional, nossa equipe de suporte terá prazer em ajudar.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon color='primary'/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography color={'primary'}>Quais são os planos disponíveis e seus preços?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <b>Resposta:</b> Oferecemos uma variedade de planos para atender às necessidades de diferentes clientes. Você pode encontrar informações detalhadas sobre nossos planos e preços em nossa página de planos ou entrar em contato conosco para obter uma consulta personalizada.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
                </div>
            </section>
        </div>
        </>
    )
}