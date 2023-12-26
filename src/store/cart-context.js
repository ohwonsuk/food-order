import React from "react";

// app 전체에 영향을 주는 state관리용으로 store 폴더 생성하고,
// defalut 값 셋팅

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
