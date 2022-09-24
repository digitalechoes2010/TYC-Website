interface ICart {
  id: number;
  name: string;
  Category: string;
  Rating: number;
  Price: number;
  NumToOrder: number;
  inStock: boolean;
  imgSrc: string;
  pDescription: string;
  info: string;
  reviews: [
    {
      author: string;
      Review: string;
    },
    {
      author: string;
      Review: string;
    }
  ];
}

type CartState = {
  Cart: ICart[];
};

type CartAction = {
  type: string;
  payload: ICart;
};

type test = {
  type: string;
};
type DispatchType = (args: CartAction) => CartAction;
