import Curso from '../components/Curso';
import Layout from '../components/Layout'
import Listado  from '../components/Listado'
import { useRouter } from 'next/router';
import ListadoBLog from '../components/ListadoBLog';

export default function Home({guitarras, curso, entradas}) {

 
  return (
      <Layout
        pagina='Inicio'
        guitarra={guitarras[3]}
      >  
        <main className="contenedor">

          <h1 className='heading'>Nuestra Colección</h1>
          <Listado guitarras={guitarras}/>  
        </main>

        <Curso 
          curso={curso}
        />
        
        <section className="contenedor">
            <ListadoBLog 
                entradas={entradas}
            />
        </section>    
      </Layout>
  )
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras`;
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [respuestaGuitarras, respuestaCursos, respuestaBlogs] = await Promise.all([

    fetch(urlGuitarras), fetch(urlCursos), fetch(urlBlog)
  ] 
  )
  
  const [guitarras, curso, entradas] = await Promise.all(
    [respuestaGuitarras.json(),
    respuestaCursos.json(),
    respuestaBlogs.json()]
  )

  return {
    props : {
      guitarras,
      curso,
      entradas
    }
  }

}
