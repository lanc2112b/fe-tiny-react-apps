const Details = ({ details, likes, setLikes}) => {

  return (
    <section className="details">
      <div className="description">
        <p>{details.desc}</p>
      </div>
      <div className="share">
        <button>Share</button>
      </div>
      <div className="views">
        <p>
          Views: <span>{details.views}</span>
        </p>
      </div>
      <div className="likes">
        <p>
          Likes: <span>{likes + details.likes} Vs. Actual {details.likes}</span>
        </p>
      </div>
      <div className="like">
        <button
          onClick={() => {
              setLikes(likes + 1);
          }}
        >
          Like
        </button>
      </div>
    </section>
  );
};
export default Details;