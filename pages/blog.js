import Layout from "../components/Layout";
import Entrada from "../components/Entrada";

const Blog = ({entradas}) => {
    console.log(entradas)

    return (
        <Layout
            pagina={'Blog'}
        >
            <main className="contenedor">
                <h2 className="heading">Blog</h2>
                {entradas.map( entrada => {
                    
                   
                    return <Entrada 
                        key={entrada.id}
                        entrada={entrada}
                    />
                }
                )}
            </main>    
        </Layout>
    )
}

export async function getServerSideProps() {

    const consulta = await fetch('http://localhost:1337/blogs')
    const entradas = await consulta.json()

    console.log(entradas)
    return {
        props : {
            entradas
        }
    }
}
export default Blog;
