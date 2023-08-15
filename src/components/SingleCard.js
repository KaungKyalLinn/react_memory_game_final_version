const  SingleCard= ({card , the_back, handle_choices, flipped}) => {


  const handle_click = () => {
    handle_choices(card);
  }

  return ( 

    <div className="the_card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="front img" className="front" />
        <img src={the_back} alt="back img" className="back" onClick={handle_click}/>
      </div>
    </div>

   );
}
 
export default SingleCard;