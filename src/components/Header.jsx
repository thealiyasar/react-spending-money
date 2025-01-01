import PropTypes from "prop-types";
import { moneyFormat } from "../helpers";
import {
  HeaderBasketButton,
  HeaderInner,
  HeaderSection,
  HeaderWallet,
} from "./Compound";

const Header = ({ money, total, basket, basketRef }) => {
  
  const scrollToBasket = () => {
    if (basketRef.current) {
      basketRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderSection>
      <HeaderInner>
        <HeaderWallet>Wallet : {moneyFormat(money - total)}</HeaderWallet>
        {basket.length > 0 && (
          <HeaderBasketButton onClick={scrollToBasket}>
            See Basket
          </HeaderBasketButton>
        )}
      </HeaderInner>
    </HeaderSection>
  );
};

Header.propTypes = {
  money: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  basket: PropTypes.array.isRequired,
  scrollToBasket: PropTypes.func,
  basketRef: PropTypes.object.isRequired,
};

export default Header;
