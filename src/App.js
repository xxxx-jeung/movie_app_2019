import React from 'react';
import PropTypes from 'prop-types';


function Food({name, image, rating}){
  return (<div>
      <h1>나는 {name} 사랑한다.</h1>
      <img src={image} alt={name} />
      <p>{rating}/10.0</p>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "http://image.dongascience.com/Photo/2019/12/43a8a87814b98b5346192ec9855f5883.jpg",
    rating: 5.5
  },
  {
    id: 2,
    name: "ramen",
    image: "https://mblogthumb-phinf.pstatic.net/MjAxOTA0MTlfNTQg/MDAxNTU1NjczMDEwMDY0.xaCJEAKoQ8zecuVWm8xO4nlOpUL5UFMFhLv3DcaY2hwg.P1wU-nBgsjNUSQ38mImtv5_R9ht3KcZhzhdDxKWT7MIg.PNG.vet6390/사람처럼_앉는_고양이.PNG?type=w800",
    rating: 5.5
  },
  {
    id: 3,
    name: "test1",
    image: "http://image.kmib.co.kr/online_image/2020/0927/611718110015050456_2.jpg",
    rating: 5.5
  },
  {
    id: 4,
    name: "test2",
    image: "http://file3.instiz.net/data/file3/2018/05/07/d/c/e/dce6cd65b67762588c2fcf50efb4e85c.gif",
    rating: 5.5
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>
        ))}
    </div>
  );
}

export default App;
