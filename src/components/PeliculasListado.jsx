import styles from "./MoviesGrid.module.css";
import movies from "./movies.json";
import { Pelicards } from "./Pelicards";

export function PeliculasListado() {
    return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
       <Pelicards key={movie.ip}  movie={movie}/>
    ))}    
    </ul>
    );
}
