import styles from "./MoviesGrid.module.css";
import movies from "./movies.json";
import { PelisCard } from "./Pelicards";

export function PeliculasListado() {
    return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
       <PelisCard key={movie.ip}  movie={movie}/>
    ))}    
    </ul>
    );
}
