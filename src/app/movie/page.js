import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";
import { resolve } from "styled-jsx/css";

const Movie = async () => {
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "eae67bb4d9msh03604c09945fb91p1694a9jsnd0bb6acfeded",
      "x-rapidapi-host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series and Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
