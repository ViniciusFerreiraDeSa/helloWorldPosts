import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Hello World!
                    </h1>
                    <p className={styles.paragrafo}>
                        Olá me chamo Vinicius Ferreira de Sá, com este projeto estou desenvolvendo uma single page (pagína unica) com nome de Hello World!. 
                    </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img className={styles.minhaFoto}
                    src={minhaFoto}
                    alt= 'Foto de Vinicius Ferreira De Sá'
                />
            </div>
        </div>
    )
}