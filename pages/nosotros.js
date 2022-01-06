import Layout from "../components/Layout";
import Image from "next/image";

import styles from "../styles/Nosotros.module.css"
const Nosotros = () => {
    return (
        <Layout
            pagina={'Nosotros'}
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre Nosotros"/>
                    <div>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default Nosotros;
