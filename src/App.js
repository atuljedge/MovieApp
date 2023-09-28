import "./App.css";
import Header from "./Componenets/Header";
import Movie from "./Componenets/Movie";
import Movies from "./movie.json";

function App() {
  let login = false;

  return (
    <>
      <div className="App">
        {login === false ? <h1>Yes i will not show you..</h1> : <h1>see</h1>}
        <Header />
        <div className="main">
          {Movies.map((element, index) => {
            return (
              <Movie
                key={index}
                title={element.Title}
                year={element.Year}
                img={element.Poster}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
