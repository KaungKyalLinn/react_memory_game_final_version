import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";
import back from "./img/back.jpg";
import book from "./img/book.jpg";
import bottle from "./img/bottle.jpg";
import gold_bag from "./img/gold_bag.jpg";
import paper from "./img/paper.jpg";
import shield from "./img/shield.jpg";
import sword from "./img/sword.jpg";

const card_images = [
  {"src" : book , matched : false},
  {"src" : bottle , matched : false},
  {"src" : gold_bag , matched : false},
  {"src" : paper , matched : false},
  {"src" : shield , matched : false},
  {"src" : sword , matched : false},
]

function App() {

  const [cards,set_cards] = useState([]);
  const [turn,set_turn] = useState(0);

  const [first_card,set_first_card] = useState(null);
  const [second_card,set_second_card] = useState(null);

  const the_back = back;

  const shuffle_cards = () => {
    const shuffled = [...card_images, ...card_images]
    .sort(() => Math.random() - 0.5)
    .map((card) => (
      {...card , id : Math.random()}
    ));

    set_cards(shuffled);
  }

  // console.log(cards , turn);

  const handle_choices = (card) => {
    first_card ? set_second_card(card) : set_first_card(card);
  }
  
  const reset_cards = () => {
    set_first_card(null);
    set_second_card(null);
    set_turn(prevturn => prevturn + 1)
  }

  useEffect( () => {
    if(first_card && second_card){

      if(first_card.src === second_card.src){
        set_cards(prev_cards => {
          return (
            prev_cards.map(card => {
              if(card.src === first_card.src){
                return {...card, matched : true}
              }else{
                return card
              }
            })
          )
        })
        reset_cards();
      }else{
        setTimeout(() => {
          reset_cards();
        },1000)
      }
      
    }
  },[first_card, second_card])



  return (
    <div className="App">
      <div className="container">

        <h1 className="heading">Magic Cards</h1>
        <button className="start_btn" onClick={shuffle_cards}>New game</button>
        <div className="cards_bord">

          {cards.map((card)=>(  
             <SingleCard
              card={card} 
              the_back={the_back} 
              handle_choices={handle_choices}
              flipped={card === first_card || card === second_card || card.matched}
              key={card.id}
            />
          ))}
          
        </div>

      </div>
    </div>
  );
}

export default App;
