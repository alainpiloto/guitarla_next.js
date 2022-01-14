import Image from "next/image";
import styles from '../../styles/Guitarra.module.css'

import Layout from "../../components/Layout";

const guitarraDetalle = ({guitarra}) => {
    const {nombre, id, precio, descripcion, url, imagen} = guitarra

    return (
        <Layout
            pagina={`Guitarra ${nombre.toUpperCase()}`}
        >
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
                    <form className={styles.formulario}>
                        <label>Cantidad:</label>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        <input 
                            type='submit'
                            value='Agregar al Carrito'
                        />
                    </form>    
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({params : {url}}) {
    
    const urlTienda = `${process.env.API_URL}/guitarras?url=${url}`;
    const respuesta = await fetch(urlTienda);
    const guitarra = await respuesta.json();

    return {
        props : {
            guitarra :guitarra[0]
        }
    }
} 

export default guitarraDetalle;
