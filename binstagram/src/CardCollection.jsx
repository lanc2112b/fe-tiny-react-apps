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
  console.log(count);
  const [likes, setLikes] = useState(details.likes);
  return (
    <main className="container">
      <Title cardData={titleCard} />
      <Image imgLoc={imgUrl} />
      <Details imageDetail={[details, likes, setLikes]} />
      <ImageNav index={index} setIndex={setIndex} count={count} />
    </main>
  );
};

export default CardCollection;
