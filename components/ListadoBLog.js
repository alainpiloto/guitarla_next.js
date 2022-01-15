import Entrada from "../components/Entrada";
import styles from '../styles/Blog.module.css'
const ListadoBLog = ({entradas}) => {
    return (
        <>
            
                <h2 className="heading">Blog</h2>
                <div className={styles.blog}>

                    {entradas.map( entrada => {
                        
                    
                        return <Entrada 
                            key={entrada.id}
                            entrada={entrada}
                        />
                    }
                    )}
                </div>
                
        </>
    )
}

export default ListadoBLog
