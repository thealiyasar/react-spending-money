import PropTypes from "prop-types";
import { forwardRef } from "react";

// HeaderSection component
const HeaderSection = ({ children }) => {
  return (
    <div className="sticky left-0 top-0 w-full z-10 bg-blue-500">
      {children}
    </div>
  );
};

HeaderSection.propTypes = {
  children: PropTypes.node.isRequired,
};

// HeaderInner component
const HeaderInner = ({ children }) => {
  return (
    <div className="container h-14 xl:h-20 flex items-center justify-between text-white text-md xl:text-xl font-semibold">
      {children}
    </div>
  );
};

HeaderInner.propTypes = {
  children: PropTypes.node.isRequired,
};

// HeaderWallet component
const HeaderWallet = ({ children }) => {
  return <span>{children}</span>;
};

HeaderWallet.propTypes = {
  children: PropTypes.node.isRequired,
};

// HeaderBasketButton component
const HeaderBasketButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-3 md:px-4 py-2 text-sm md:text-md bg-green-600 hover:opacity-70 text-white rounded-md"
    >
      {children}
    </button>
  );
};

HeaderBasketButton.propTypes = {
  children: PropTypes.node.isRequired,
};

// Container component
const Container = ({ children }) => {
  return <div className="container py-20">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

// ProductGrid component
const ProductGrid = ({ children }) => {
  return <div className="grid grid-cols-12 gap-6">{children}</div>;
};

ProductGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

// ProductCard component
const ProductCard = ({ children }) => {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-3 relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      {children}
    </div>
  );
};

ProductCard.propTypes = {
  children: PropTypes.node.isRequired,
};

// ProductImage component
const ProductImage = ({ url = "", alt = "" }) => {
  return (
    <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
      <img className="object-contain mx-auto" src={url} alt={alt} />
    </div>
  );
};

ProductImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

// ProductInner component
const ProductInner = ({ children }) => {
  return <div className="mt-4 px-5 pb-5">{children}</div>;
};

ProductInner.propTypes = {
  children: PropTypes.node.isRequired,
};

// ProductTitle component
const ProductTitle = ({ as: Component = "div", children }) => {
  return (
    <Component className="text-xl xl:text-xl tracking-tight text-slate-900 text-ellipsis whitespace-nowrap overflow-hidden">
      {children}
    </Component>
  );
};

ProductTitle.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};

// ProductPriceInner component
const ProductPriceInner = ({ children }) => {
  return (
    <div className="mt-2 mb-5 flex items-center justify-between">
      {children}
    </div>
  );
};

ProductPriceInner.propTypes = {
  children: PropTypes.node.isRequired,
};

// ProductPrice component
const ProductPrice = ({ as: Component = "span", children }) => {
  return (
    <Component className="text-xl xl:text-3xl font-bold text-slate-900">
      {children}
    </Component>
  );
};

ProductPrice.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};

// ProductButtonsInner component
const ProductButtonsInner = ({ children }) => {
  return (
    <div className="flex gap-2 items-center justify-between">{children}</div>
  );
};

ProductButtonsInner.propTypes = {
  children: PropTypes.node.isRequired,
};

// ProductButtonsInner component
const ProductQuantity = ({ children }) => {
  return (
    <div className="flex-1 flex items-center justify-center h-10 rounded-md px-5 py-2 text-center text-lg font-medium text-slate-900 bg-gray-100">
      {children}
    </div>
  );
};

ProductQuantity.propTypes = {
  children: PropTypes.node.isRequired,
};

// ProductPropButton component
const ProductPropButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="flex-1 h-10 flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-gray-700 focus:outline-none disabled:opacity-20 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

ProductPropButton.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasketContainer component
const BasketContainer = forwardRef(({ children, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className="relative bg-white my-10 p-5 rounded-md shadow-sm"
    >
      {children}
    </div>
  );
});

BasketContainer.displayName = "BasketContainer";

BasketContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasketContainerTitle component
const BasketContainerTitle = ({ as: Component = "h2", children }) => {
  return (
    <Component className="text-2xl font-semibold mb-4 pb-2 border-b border-slate-200">
      {children}
    </Component>
  );
};

BasketContainerTitle.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};

// BasketItems component
const BasketItems = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-2 pb-5 border-b border-slate-200">
      {children}
    </div>
  );
};

BasketItems.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasketItemInner component
const BasketItemInner = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row  sm:items-center justify-between">
      {children}
    </div>
  );
};

BasketItemInner.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasketItemLeft component
const BasketItemLeft = ({ children }) => {
  return <div className="flex gap-5 items-center">{children}</div>;
};

BasketItemLeft.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasketItemRight component
const BasketItemRight = ({ children }) => {
  return <div className="text-lg font-semibold">{children}</div>;
};

BasketItemRight.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasketItemImageInner component
const BasketItemImageInner = ({ children }) => {
  return (
    <div className="flex-[0_0_auto] w-[75px] h-[75px] relative border border-slate-200 rounded-md overflow-hidden hidden sm:block">
      {children}
    </div>
  );
};

BasketItemImageInner.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasketItemImage component
const BasketItemImage = ({ url = "", alt = "" }) => {
  return (
    <img className="block w-full h-full object-cover" src={url} alt={alt} />
  );
};

BasketItemImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

// BasketItemTitle component
const BasketItemTitle = ({ children }) => {
  return (
    <div className="text-sm xl:text-lg flex-[0_0_auto] w-full">{children}</div>
  );
};

BasketItemTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasketFooter component
const BasketFooter = ({ children }) => {
  return (
    <div className="py-4 flex gap-5 flex-col md:flex-row md:items-center justify-between">
      {children}
    </div>
  );
};

BasketFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasketClearButton component
const BasketClearButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-red-600 hover:opacity-70 text-white rounded-md order-2 md:order-1"
    >
      {children}
    </button>
  );
};

BasketClearButton.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasketTotalPrice component
const BasketTotalPrice = ({ children }) => {
  return (
    <div className="text-xl font-semibold order-1 md:order-2">{children}</div>
  );
};

BasketTotalPrice.propTypes = {
  children: PropTypes.node.isRequired,
};

// Loading component
const Loading = ({ children }) => {
  return (
    <div className="w-full bg-blue-500 rounded-md p-2 text-md font-semibold italic text-white">
      {children}
    </div>
  );
};

Loading.propTypes = {
  children: PropTypes.node.isRequired,
};

// GotoTop component
const GotoTop = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="fixed right-2 bottom-2 w-12 h-12 rounded-full text-white text-2xl bg-slate-800 flex items-center justify-center z-50 transition-all duration-300 hover:bg-slate-900"
    >
      {children}
    </button>
  );
};

GotoTop.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  HeaderSection,
  HeaderInner,
  HeaderWallet,
  HeaderBasketButton,
  Container,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInner,
  ProductTitle,
  ProductPriceInner,
  ProductPrice,
  ProductButtonsInner,
  ProductQuantity,
  ProductPropButton,
  BasketItemInner,
  BasketItemLeft,
  BasketItemRight,
  BasketItemImageInner,
  BasketItemImage,
  BasketItemTitle,
  BasketContainer,
  BasketContainerTitle,
  BasketItems,
  BasketFooter,
  BasketClearButton,
  BasketTotalPrice,
  Loading,
  GotoTop,
};
