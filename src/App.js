import React from 'react';

function Food({fav}){
  return <h1>나는 {fav} 사랑한다.</h1>
}

function App() {
  return (
    <div>
      <section>Table</section>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="삼겹살"/>
      <Food fav="쭈꾸미"/>
    </div>
  );
}

export default App;
