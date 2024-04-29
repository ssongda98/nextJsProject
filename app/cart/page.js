// Server Component, Client Component
// Server Component : html에 onClick같은 자바스크립트 기능넣기 불가능 / 로딩속도빠름,SEO굳 / 큰페이지에 추천
// Client Component : 페이지 맨위에 'use client' 넣어줘야하고, useState, useEffect등 사용 가능 / JS기능 필요한 곳만 요고 사용해

import {age, name} from './data.js'
let 장바구니 = ['Tomatoes', 'Pasta']
export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]}/>
      <Button color="red"/><Button color="blue"/>
    </div>
  )
}

// component. 재사용 코드
function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Button(props) {
    return (
        <div>
            <button style={{ backgroundColor: props.color, color: 'white', padding: '1rem' }}>BUTTON</button>
        </div>
    );
}
