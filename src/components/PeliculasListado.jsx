import styles from "./MoviesGrid.module.css";
import { Pelicards } from "./Pelicards";
import { useEffect, useState } from "react";

export function PeliculasListado() {
    //arranca el consumo de api , usa useefect (llamada externa) es un efecto secundario 
    //que se ejecuta despues de que el componente se cargue en el dom  hook
    
    const [movies, setMovies] = useState([]);// Esta linea resume las dos comentadas de abajo
   
   //const movies = moviesState[0];
    //const setMovies = moviesState[1];
    

    useEffect(()=>{
      fetch("https://api.themoviedb.org/3/discover/movie",{
        headers: {
        Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWQ1ZWJmZTI4YzBmYzQyMjI5Y2NiODk4YzZlYzk2MSIsInN1YiI6IjYxZTAzZGVjYzE3NWIyMDA0MWNjY2Q2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DbICgInBVo2rRaEPCItBAmrwx7wU_ycOMA5TB5YfRfs" ,
        "Content-Type": "application/json;charset=utf-8",
      },
      })
      .then((result) => result.json())
      .then((data) => {
        movies = data.results;
        console.log(movies);
      });
    });
    return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
       <Pelicards key={movie.ip}  movie={movie}/>
    ))}    
    </ul>
    );
}
