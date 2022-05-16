import Cart from "../Components/Cart";
import DesignProduct from "../Components/DesignProduct";

function Store2(props) {
  return (
    <>
      <div className="flex-container">
        <DesignProduct
          data={props.data}
          cartActive={props.cartActive}
          SetCartActive={props.SetCartActive}
        />
        <Cart />
      </div>
    </>
  );
}
export default Store2;
