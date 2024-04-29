// map 반복문
// copy로 array 복사해서 반복되는 js이용하기
'use client'

import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, 수량변경] = useState([0,0,0]) //client componant에만 사용가능
  return (
    <div>
      <h2 className="title">Products</h2>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
            <button onClick={()=>{
              let copy = [...수량]
              copy[i]--
              수량변경(copy)
            }}> - </button>
            <span> {수량[i]} </span>
            <button onClick={()=>{
             let copy = [...수량]
             copy[i]++
             수량변경(copy)
            }}> + </button>
          </div>
        );
      })}
    </div>
  );
}
