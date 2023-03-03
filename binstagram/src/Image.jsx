const Image = (imageLoc) => {
  //console.log(imageLoc);
  return (
    <section className="main-image">
      <img src={imageLoc.imgLoc} />
    </section>
  );
};

export default Image;