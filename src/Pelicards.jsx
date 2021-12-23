
import styles from "./PeliculasCard.module.css";
export function PelisCard({movie}){
    console.log(styles);
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
   return (
   <li className={styles.PeliculaCard}>
       <img 
       widht={230} 
        height={345}
        className={styles.movieImage}
        src={imageUrl} 
        alt={movie.title} />
       <div>{movie.title}</div>
       </li> 
       );
}