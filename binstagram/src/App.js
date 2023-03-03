import "./App.css";
import Header from "./Header.jsx";
import Title from "./Title.jsx";
import Image from "./Image";
import Details from './Details';
import ImageNav from "./ImageNav";
import Footer from './Footer';
import { useState } from 'react';

function App(image) { 
  //console.log(image);
  const { titleCard, imgUrl, details } = image.image;

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

  const [likes, setLikes] = useState(details.likes);
  
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Title cardData={titleCard} />
        <Image imgLoc={imgUrl} />
        <Details imageDetail={[details,likes,setLikes]} />
        <ImageNav />
      </main>
      <Footer />
    </div>
  );
}

export default App;
