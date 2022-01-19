import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina, guitarra}) => {
    return (
        <div>
            <Head>
                <title>Guitar-LA - {pagina}</title>
                <meta name="description" content="Sitio Web de Venta de Guitarras" />
                
                <meta property="og:image" content="https://guitarla-next-js.vercel.app/img/preview.jpg" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="286" />
                <meta property="og:site_name" content="GuitarLa-Project" />
                <meta property="og:type" content="website" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Roboto:wght@300;400;700;900&family=Staatliches&display=swap" rel="stylesheet"/>
            </Head>
            <Header 
                guitarra={guitarra}
            />
                {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    guitarra : null
}

export default Layout
