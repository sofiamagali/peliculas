const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API +  path,{
        headers: {
        Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWQ1ZWJmZTI4YzBmYzQyMjI5Y2NiODk4YzZlYzk2MSIsInN1YiI6IjYxZTAzZGVjYzE3NWIyMDA0MWNjY2Q2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DbICgInBVo2rRaEPCItBAmrwx7wU_ycOMA5TB5YfRfs" ,
        "Content-Type": "application/json;charset=utf-8",
      },
      })
      .then((result) => result.json())
}