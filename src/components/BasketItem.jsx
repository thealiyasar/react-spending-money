import PropTypes from "prop-types";
import { moneyFormat } from "../helpers";
import {
  BasketItemImage,
  BasketItemImageInner,
  BasketItemInner,
  BasketItemLeft,
  BasketItemTitle,
  BasketItemRight,
} from "./Compound";

const BasketItem = ({ item }) => {
  return (
    <BasketItemInner>
      <BasketItemLeft>
        <BasketItemImageInner>
          <BasketItemImage url={item.images[0]} alt={item.title} />
        </BasketItemImageInner>
        <BasketItemTitle>{item.title}</BasketItemTitle>
      </BasketItemLeft>
      <BasketItemRight>
        {item.quantity} x {moneyFormat(item.price)}
      </BasketItemRight>
    </BasketItemInner>
  );
};

BasketItem.propTypes = {
  item: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default BasketItem;
