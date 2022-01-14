import styles from "./MoviesGrid.module.css";
import { Pelicards } from "./Pelicards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { get } from "../pages/utils/httpCLient";

export function PeliculasListado() {
    //arranca el consumo de api , usa useefect (llamada externa) es un efecto secundario 
    //que se ejecuta despues de que el componente se cargue en el dom  hook
    
    const [movies, setMovies] = useState([]);// Esta linea resume las dos comentadas de abajo
    
   //const movies = moviesState[0];
    //const setMovies = moviesState[1];
    

    useEffect(()=>{
       get("/discover/movie")
      .then((data) => {
         setMovies(data.results);
      });
    },[]);
    return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
       <Pelicards key={movie.ip}  movie={movie}/>
    ))}    
    </ul>
    );
}
