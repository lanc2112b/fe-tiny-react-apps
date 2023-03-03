import "./App.css";
import Header from "./Header.jsx";
import Footer from './Footer';
import CardCollection from "./CardCollection";

function App(image) { 
  //console.log(image);
  

  //console.log(imgUrl);

  /**
   * TODO: 
   * Move <main>
   *  title
   *  image
   *  details
   *  imagenav
   * </main> 
   *  (move state lower)
   * Into CardCollection (new)
   *  the entire image object can be passed down to CardCollection (moving state lower)
   * 
   * CardCollection makes states for each card (each property)
   *  imagenav & details ate the only two that do need props passing as well as state
   *  CardCollection holds the index (current) and passes a next & previous state with which index to load (current +/- 1)
   */

  return (
    <div className="App">
      <Header />
      <CardCollection />
      <Footer />
    </div>
  );
}

export default App;
