import Title from "./Title.jsx";
import Image from "./Image";
import Details from "./Details";
import ImageNav from "./ImageNav";
import { useState } from "react";
import pageData from "./images.json";

//console.log(pageData);

const CardCollection = () => {

  const [index, setIndex] = useState(0);
  
  const { titleCard, imgUrl, details } = pageData.pageData[index].image;
  
  const count = pageData.pageData.length;
  
  let [likes, setLikes] = useState(0);

  return (
    <main className="container">
      <Title cardData={titleCard} />
      <Image imgLoc={imgUrl} />
      <Details details={details} likes={likes} setLikes={setLikes} />
      <ImageNav index={index} setIndex={setIndex} count={count} />
    </main>
  );
};

export default CardCollection;
