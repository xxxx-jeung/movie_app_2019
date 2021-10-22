import React from 'react';

function Food({name, image}){
  return <div>
      <h1>나는 {name} 사랑한다.</h1>
      <p>{image}</p>
    </div>
}

const foodILike = [
  {
    name: "kimchi",
    image: "123"
  },
  {
    name: "ramen",
    image: "456"
  },
  {
    name: "test1",
    image: "789"
  },
  {
    name: "test2",
    image: "10112"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} image={dish.image}/>
        ))}
    </div>
  );
}

export default App;
