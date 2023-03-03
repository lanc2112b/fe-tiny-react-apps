const Details = (imageDetail) => {
  //console.log(imageDetail.imageDetail[1], "<< function");
  return (
    <section className="details">
      <div className="description">
        <p>{imageDetail.imageDetail[0].desc}</p>
      </div>
      <div className="share">
        <button>Share</button>
      </div>
      <div className="views">
        <p>
          Views: <span>{imageDetail.imageDetail[0].views}</span>
        </p>
      </div>
      <div className="likes">
        <p>
          Likes: <span>{imageDetail.imageDetail[1]}</span>
        </p>
      </div>
      <div className="like">
        <button
          onClick={() => {
            imageDetail.imageDetail[2](imageDetail.imageDetail[1] + 1);
          }}
        >Like</button>
      </div>
    </section>
  );
};
export default Details;