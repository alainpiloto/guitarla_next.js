import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'



const NoEncontrado = () => {
    return (
        <div className={styles.contenido}>
            <h2>Pagina No Encontrada</h2>
            <Link href={'/'}><a>Ir a Inicio</a></Link>            
        </div>
    )
}

export default NoEncontrado
