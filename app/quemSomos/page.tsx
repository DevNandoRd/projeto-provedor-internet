import styles from '../quemSomos/quemSomos.module.css'

export default function QuemSomos() {
    return (
        <> 
            <div className={styles.pgInternas}>
            <h2>Quem somos</h2>
            </div>
            <div className={styles.myAppContainer}>
                <section className='space-canvas-col'>
                    <div className={styles.texto}>
                        <h3>Bem vindo a connect</h3>
                        <p>Sua principal fonte de conectividade confiável e de alta velocidade. Somos uma equipe apaixonada por tecnologia e comprometida em proporcionar a melhor experiência de internet para nossos clientes.</p>
                        <p>Fundada em [ano de fundação], a Connect surgiu com a missão de conectar pessoas, empresas e comunidades através da tecnologia. Desde então, temos trabalhado incansavelmente para oferecer serviços de internet de qualidade, combinados com um atendimento excepcional ao cliente.</p>
                        <p>Nossa equipe é formada por especialistas em tecnologia e telecomunicações, dedicados a garantir que você tenha acesso à internet rápida, estável e segura, onde quer que esteja. Estamos constantemente investindo em infraestrutura e inovação para manter nossa rede atualizada e fornecer as velocidades mais rápidas disponíveis.</p>
                        <p>Na Connect, valorizamos a transparência, a confiabilidade e a satisfação do cliente acima de tudo. Estamos aqui para simplificar sua experiência de internet e garantir que você tenha tudo o que precisa para se manter conectado e produtivo.</p>
                        <p>Seja você um usuário doméstico, uma pequena empresa ou uma corporação de grande porte, a Connect tem a solução perfeita para suas necessidades de conectividade. Junte-se a nós e descubra o poder da verdadeira internet de alta velocidade.</p>
                    </div>
                    <div>
                        <img src="/assets/Moldem.png" alt="" />
                    </div>
                </section>
            </div>
        </>
    )
}