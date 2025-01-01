import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Product from "./components/Product";
import Header from "./components/Header";
import {
  Container,
  GotoTop,
  Loading,
  ProductGrid,
} from "./components/Compound";
import { IoMdRocket } from "react-icons/io";
import Basket from "./components/Basket";

const App = () => {
  // State
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const money = 10000;

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=14&select=title,price,images"
      );
      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // Effects
  useEffect(() => {
    fetchProducts();
  }, []);

  // Calculate total price
  useEffect(() => {
    const total = basket.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
  }, [basket]);

  // Ref
  const basketRef = useRef(null);

  // Scroll to top button
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header
        money={money}
        total={total}
        basket={basket}
        basketRef={basketRef}
      />
      <Container>
        {loading && <Loading>Loading...</Loading>}
        {products && (
          <ProductGrid>
            {products.map(product => (
              <Product
                product={product}
                key={product.id}
                total={total}
                money={money}
                basket={basket}
                setBasket={setBasket}
              />
            ))}
          </ProductGrid>
        )}
        {basket.length > 0 && (
          <Basket
            basket={basket}
            ref={basketRef}
            setBasket={setBasket}
            total={total}
          />
        )}
      </Container>
      {showScrollButton && (
        <GotoTop onClick={scrollToTop}>
          <IoMdRocket />
        </GotoTop>
      )}
    </>
  );
};

export default App;
