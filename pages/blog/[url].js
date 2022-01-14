import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import Image from "next/image"
import { formatearFecha } from "../../helpers"
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {
  
    const {titulo, contenido, imagen, published_at} = entrada
    return (
        <Layout
            pagina={titulo}
        >

        <main className="contenedor">
            <h1 className="heading">{titulo}</h1>
            <article className={styles.entrada}>
                <Image  layout="responsive" width={800} height={600} src={imagen.url} alt={` Imagen entrada ${titulo}`}/>
                <div className={styles.contenido}>
                    <p className={styles.fecha}>
                        {formatearFecha(published_at)}  
                    </p>
                <p className={styles.texto}>
                 {contenido}
                </p>
                </div>
            </article>
        </main>
        </Layout>
                )
    }


    export async function getStaticPaths() {
        const urlBlog = `${process.env.API_URL}/blogs`
        const consulta = await fetch(urlBlog)
        const entradas = await consulta.json()
 
        const paths = entradas.map( entrada => ({
            params : {url : entrada.url}
            
        }))

        return {
            paths,
            fallback: false
        }

    }

    export async function getStaticProps({params : {url}}) {
        const urlBlog = `${process.env.API_URL}/blogs?url=${url}` // la sintaxis al final (?url=${url}) indica a la API que filtre a la coleccion por la url
        const consulta = await fetch(urlBlog)
        const entrada = await consulta.json()
         
        return {

            props : {
                entrada : entrada[0]
            }
        }
        
    }
export default EntradaBlog;
