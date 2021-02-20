import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const romoveItem = (id) => {
    let newPeople = people.filter((person)=>person.id !== id)
    setPeople(newPeople);
  }
  return <>
  {people.map((person)=>{
    const {id, name} = person;
    return (
      <div key={id} className='item'>
        <h4>{name}</h4>
        <button onClick={()=> romoveItem(id)}>remove</button>
      </div>
    )
  })
  }
  <button className='btn' onClick={()=> setPeople([])}>
    clear items
  </button>
  </>
};

export default UseStateArray;
