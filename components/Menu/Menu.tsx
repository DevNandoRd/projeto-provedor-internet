import Link from "next/link"
export default function Menu() {
    return (
        <>
            <nav>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/quemSomos'><li>Quem Somos</li></Link>
                    <Link href='/planos'><li>Nossos Planos</li></Link>
                    <Link href='/contatos'><li>Contatos</li></Link>
                </ul>
            </nav>
        </>
    )
}