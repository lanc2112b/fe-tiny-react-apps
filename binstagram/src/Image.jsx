const Image = (imageLoc) => {
  //console.log(imageLoc);
  return (
    <section className="main-image">
      <img src={imageLoc.imgLoc} alt="Pass the title to this component" />
    </section>
  );
};

export default Image;