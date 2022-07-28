const INIT_STATE = {
  carts: []
};

const handleCart = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADDITEM":
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp]
        };
      }

    case "DELITEM":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data
      };
    case "DELINDV":
      const ItemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[ItemIndex_dec].qty >= 1) {
        const deltItem = (state.carts[ItemIndex_dec].qty -= 1);
        return {
          ...state,
          carts: [...state.carts]
        };
      } else if (state.carts[ItemIndex_dec].qty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data
        };
      }
    case "KHALI":
      return {
        carts: []
      };
    default:
      return state;
  }
};

export default handleCart;
