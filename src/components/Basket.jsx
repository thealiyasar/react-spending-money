import { forwardRef } from "react";
import PropTypes from "prop-types";
import BasketItem from "./BasketItem";
import { moneyFormat } from "../helpers";
import {
  BasketClearButton,
  BasketContainer,
  BasketContainerTitle,
  BasketFooter,
  BasketItems,
  BasketTotalPrice,
} from "./Compound";

const Basket = forwardRef(({ basket, setBasket, total }, ref) => {
  return (
    <BasketContainer ref={ref}>
      <BasketContainerTitle as="h3">Basket Items</BasketContainerTitle>
      <BasketItems>
        {basket.map(item => (
          <BasketItem item={item} key={item.id} />
        ))}
      </BasketItems>
      <BasketFooter>
        <BasketClearButton onClick={() => setBasket([])}>
          Clear Basket
        </BasketClearButton>
        <BasketTotalPrice>Total Price: {moneyFormat(total)}</BasketTotalPrice>
      </BasketFooter>
    </BasketContainer>
  );
});

Basket.displayName = "Basket";

Basket.propTypes = {
  basket: PropTypes.array.isRequired,
  basketRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  setBasket: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Basket;
