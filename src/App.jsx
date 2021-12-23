import { PeliculasListado } from "./PeliculasListado";
import styles from "./App.module.css"
export function App() {
    return <div> 
        <header>
          <h1 className={styles.title} >Peliculas</h1>
        </header>
        <main>
          <PeliculasListado />
        </main>
    </div>
}