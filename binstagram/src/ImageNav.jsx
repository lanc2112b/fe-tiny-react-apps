const ImageNav = ({ index, setIndex, count }) => {
  
  const next = index === (count - 1) ? index : index + 1;
  const prev = index === 0 ? 0 : index - 1;
  
  const onClickHandler = (value) =>{
      //console.log(value.target.value)
      if(value.target.value === "next")setIndex(next);
      if(value.target.value === "prev")setIndex(prev);
  }

    return (
      <nav className="img-nav">
        <button className="prev" value="prev" onClick={onClickHandler}> Previous</button>
        <button className="next" value="next"  onClick={onClickHandler}>Next </button>
      </nav>
    );
}
export default ImageNav;