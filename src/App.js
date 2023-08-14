import { useState } from "react";
import back from "./img/back.jpg";
import book from "./img/book.jpg";
import bottle from "./img/bottle.jpg";
import gold_bag from "./img/gold_bag.jpg";
import paper from "./img/paper.jpg";
import shield from "./img/shield.jpg";
import sword from "./img/sword.jpg";

const card_images = [
  {"src" : book},
  {"src" : bottle},
  {"src" : gold_bag},
  {"src" : paper},
  {"src" : shield},
  {"src" : sword},
]

function App() {

  const [cards,set_cards] = useState([]);
  const [turn,set_turn] = useState(0);

  const shuffle_cards = () => {
    const shuffled = [...card_images, ...card_images]
    .sort(() => Math.random() - 0.5)
    .map((card) => (
      {...card , id : Math.random()}
    ));

    set_cards(shuffled);
  }

  console.log(cards , turn);


  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Magic Cards</h1>
        <button className="start_btn" onClick={shuffle_cards}>New game</button>

        <div className="card_bord">


          {cards.map((card)=>
            (
              <div className="the_card" key={card.id}>
                <img src={card.src} alt="" className="front" />
                <img src="../public/img/back.jpg" alt="" className="back" />
              </div>
            )
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
