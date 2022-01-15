import Layout from "../components/Layout";

import ListadoBLog from "../components/ListadoBLog";

const Blog = ({entradas}) => {

    return (
        <Layout
            pagina={'Blog'}
        >
            <main className="contenedor">
                <ListadoBLog
                    entradas={entradas}
                />
                
            </main>    
        </Layout>
    )
}

export async function getStaticProps() {
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
    const consulta = await fetch(url)
    const entradas = await consulta.json()

    return {
        props : {
            entradas
        }
    }
}
export default Blog;
