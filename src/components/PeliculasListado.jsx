import styles from "./MoviesGrid.module.css";
import { Pelicards } from "./Pelicards";
import { useEffect, useState } from "react";
import { get } from "../pages/utils/httpCLient";
import { Spinner } from "./Spinner";
import { useLocation } from "react-router";



function useQuery() {
   return  new URLSearchParams(useLocation().search);

 }



export function PeliculasListado() {
    //arranca el consumo de api , usa useefect (llamada externa) es un efecto secundario 
    //que se ejecuta despues de que el componente se cargue en el dom  hook
    
    const [movies, setMovies] = useState([]);// Esta linea resume las dos comentadas de abajo
    const [isLoading, setIsLoading] = useState(true);

   //const movies = moviesState[0];
    //const setMovies = moviesState[1];
    
   //const location = useLocation();
   //console.log(location.search);


   //las de abajo agarra la query para la busqueda
   const query = useQuery();
   const search = query.get("search");
   console.log(search);

    useEffect(()=>{
       setIsLoading(true);
       const searchUrl= search  //si esta condicion se cumple le agrega lo de abajo a la url,sino
         ? "/search/movie?query=" + search 
         : "/discover/movie";//sino le asigna esto
       get(searchUrl).then((data) => {
         setMovies(data.results);
         setIsLoading(false);
      });
    },[search]); //si esto no esta vacio,implica que al borrar la busqueda vuelva a 0

    if(isLoading){
       return <Spinner />;
    }

    return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
       <Pelicards key={movie.ip}  movie={movie}/>
    ))}    
    </ul>
    );
}
