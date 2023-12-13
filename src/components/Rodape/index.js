import styles from './Rodape.module.css'
import { FaInstagramSquare } from "react-icons/fa";


// caso eu tivesse pegado SVG da alura usaria o código abaixo
// import {ReactComponent as NomeDaLogo(MarcaRegistrada)} from 'assets/(nome do destinatario da pasta).svg'
// no JSX ficaria <MarcaRegistrada/>

export default function Rodape() { 
    return (
        <footer className={styles.rodape}>
            <FaInstagramSquare />
            <a href='https://www.instagram.com/vinnizx_sa/?hl=pt-br' target='_blank'>@vinnizx_sa</a>
        </footer>
    )
}