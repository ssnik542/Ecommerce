const INIT_STATE = {
  carts: []
};

const handleCart = (state = INIT_STATE, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // const exist = state.carts.find((x) => x.id === product.id);
      // if (exist) {
      //   return state.map((x) =>
      //     x.id === product.id ? { ...x, qty: x.qty + 1 } : x
      //   );
      // } else {
      //   const product = action.product;
      //   return [...state, { ...product, qty: 1 }];
      // }
      return {
        ...state,
        carts: [...state.carts, action.payload]
      };

    default:
      return state;
  }
};

export default handleCart;
