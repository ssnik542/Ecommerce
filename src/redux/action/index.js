export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product
  };
};

export const delCart = (id) => {
  return {
    type: "DELITEM",
    payload: id
  };
};

export const delIndv = (item) => {
  return {
    type: "DELINDV",
    payload: item
  };
};

export const khaliCart = () => {
  return {
    type: "KHALI"
  };
};
