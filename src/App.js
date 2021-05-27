import React from "react";
import { Card } from "./components";
import movies from "./data";

const App = () => {
  console.log(movies);
  return (
    <main>
      {movies.map((movie) => (
        <Card classes="mr" key={`${movie.id}`}>
          <Card.Image src={movie.image} alt={movie.title} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.desc}</Card.Text>
            <Card.Button>{movie.ctaText}</Card.Button>
          </Card.Body>
        </Card>
      ))}
    </main>
  );
};

export default App;
