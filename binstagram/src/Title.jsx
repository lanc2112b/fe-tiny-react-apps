const Title = (titleCard) => {
    return (
      <section className="title">
        <div className="title-row">
          <h2>{titleCard.cardData.title}</h2>
        </div>
        <div className="author">
          <p>Uploaded by: <span>{titleCard.cardData.by}</span></p>
        </div>
      </section>
    );
}

export default Title;