import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="logo192.png" className="logo"></img>
        </header>
        <main className="container">
          <section className="title">
            <div className="title">
              <h2>
              txt
              </h2>
            </div>
            <div className="author">
              <p> hello
              </p>
            </div>
          </section>
          <section className="main-image">
            <img src="logo512.png"/>
          </section>
          <section className="details">
            <div className="description">
              <p>
                sam
              </p>
            </div>
            <div className="share">
              <button>Share</button>
            </div>
            <div className="views"><p>Views<span>7</span></p></div>
            <div className="likes"><p>Likes<span>9</span></p></div>
            <div className="like"><button>Like</button></div>
          </section>
          <nav className="img-nav">
            <button className="prev">Previous</button>
            <button className="next">Next</button>
          </nav>
        </main>
      <footer></footer>
    </div>
  );
}

export default App;
