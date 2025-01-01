import PropTypes from "prop-types";
import { BsCartDashFill, BsCartPlusFill } from "react-icons/bs";
import {
  ProductButtonsInner,
  ProductCard,
  ProductImage,
  ProductInner,
  ProductPrice,
  ProductPriceInner,
  ProductPropButton,
  ProductQuantity,
  ProductTitle,
} from "./Compound";
import { moneyFormat } from "../helpers";

const Product = ({ product, basket, setBasket, total, money }) => {
  // 1. Add the prop types for the Product component
  Product.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    basket: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
    setBasket: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    money: PropTypes.number.isRequired,
  };

  // 2. Add the addBasket function
  const basketItem = basket.find(item => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find(item => item.id === product.id);
    if (checkBasket) {
      setBasket(
        basket.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  };

  // 3. Add the removeBasket function
  const removeBasket = () => {
    const checkBasket = basket.find(item => item.id === product.id);
    if (checkBasket.quantity > 1) {
      setBasket(
        basket.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setBasket(basket.filter(item => item.id !== product.id));
    }
  };

  return (
    <ProductCard>
      <ProductImage url={product.images[0]} />
      <ProductInner>
        <ProductTitle as="h5">{product.title}</ProductTitle>
        <ProductPriceInner>
          <ProductPrice as="span">{moneyFormat(product.price)}</ProductPrice>
        </ProductPriceInner>
        <ProductButtonsInner>
          <ProductPropButton
            onClick={() => removeBasket()}
            disabled={!basketItem}
          >
            <BsCartDashFill />
          </ProductPropButton>
          <ProductQuantity>
            {(basketItem && basketItem.quantity) || 0}
          </ProductQuantity>
          <ProductPropButton
            onClick={() => addBasket()}
            disabled={total + product.price > money}
          >
            <BsCartPlusFill />
          </ProductPropButton>
        </ProductButtonsInner>
      </ProductInner>
    </ProductCard>
  );
};

export default Product;
