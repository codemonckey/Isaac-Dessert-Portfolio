import {styles} from "../../styles/Home.module.css"

function Games() {

  const cards = ["werewolf", 2, 3, 4, 5];
  const listItems = cards.map((card) =>
    <div href={card.Games} className={styles.card}>{card}</div>
  );

    return <div>
      <div class='card'>Hello</div>
      {listItems}
      </div>
  }
  
  export default Games