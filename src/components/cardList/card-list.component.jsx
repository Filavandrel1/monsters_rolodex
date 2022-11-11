import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = (props) => {
  const {monsters, searching} = props;

  return (
    <div className="card_list">
      {
        monsters.map(monster => {
            const {id, name, email} = monster;
            if(name.toLowerCase().includes(searching)){
              return (
                <Card key={id} id={id} name={name} email={email} />
              );
            }
          }
        )
      }
    </div>
  );
}

export default CardList;