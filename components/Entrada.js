import Link from "next/link";
import { formatearFecha } from "../helpers";
const Entrada = ({entrada}) => {
    const {id, titulo, resumen, imagen, url, published_at} = entrada;

    const fecha = formatearFecha(published_at)
    return (
        <article>
            <p>{titulo}</p>
            <p>{fecha}</p>
            <p>{resumen}</p>
            <Link href={`/blog/${id}`}>
                    Leer entrada
            </Link>
        </article>
    )
    }
export default Entrada;
