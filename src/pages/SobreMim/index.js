import styles from "./SobreMim.module.css"
import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobreMimFoto.JPG"

export default function SobreMim (){
    return(
       <PostModelo
       fotoCapa={fotoCapa}
       titulo="Sobre Mim"
       >
            <h3 className={styles.subtitulo}>
                Olá eu sou o Vinicius
            </h3>
            <img src={fotoSobreMim} 
                 alt="Vinicius comendo bolacha"
                 className={styles.fotoSobreMim}
            />

        <p className={styles.paragrafo}>
            Gosto de passar meu tempo livre assistindo algo, jogando ou codando algum webSite.
        </p>

        <p className={styles.paragrafo}>
            Atualmente estou estudando React, e estou no inicio de aprendizado espero chegar longe com meus estudos e me tornar um profissional de qualidade.
        </p>

        <p className={styles.paragrafo}>
            Ja sei codar em duas liguagens que são semelhantes JavaScript e TypeScript confesso que gosto de codar mais em TypeScript pois caso aconteça algum erro ele me responde em run code e não em run time igual o JavaScript.
        </p>

        <p className={styles.paragrafo}> 
            Gosto de estilizar páginas, acho que é a parte que eu mais gosto de fazer como desenvolvedor web, ainda não fiz nenhuma página E-commerce. Ja fiz algumas páginas landing pages porém nada muito extraordinário.
        </p>
       </PostModelo>
    )
}