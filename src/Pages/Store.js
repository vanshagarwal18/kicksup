import Cart from "../Components/Cart";
import FilterShoes from "../Components/FilterShoes";

function Store(props) {
  return (
    <>
      <div className="flex-container">
        <FilterShoes data={props.data} cartActive={props.cartActive} SetCartActive={props.SetCartActive} />
        <Cart />
      </div>
    </>
  );
}
export default Store;
