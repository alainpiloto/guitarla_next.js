import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Guitarra.module.css'
const Guitarra = ({guitarra}) => {
    const {nombre, id, precio, descripcion, url, imagen} = guitarra

    return (
        <div className={styles.guitarra}>
            <Image 
                layout="responsive" 
                width={180} 
                height={358} 
                src={imagen[0].url}
                alt={`Imagen Guitarra ${nombre}`} 
                
            />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`tienda/${url}`}>
                    <a className={styles.enlace}>Ver Producto</a>
                </Link>
            </div>
        </div>
    )
    }

export default Guitarra
