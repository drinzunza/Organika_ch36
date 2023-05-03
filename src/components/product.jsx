import DataContext from '../state/dataContext';
import './product.css';
import QuantityPicker from './quantityPicker';
import { useEffect, useState, useContext } from 'react';
//import the UseEffect and create the hook, please

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const globalAdd = useContext(DataContext).addProductToCart;

  useEffect(function () {
    //when the component load
    console.log("hello, i'm a product");
  }, []);

  function handleQuanty(qnty) {    
    setQuantity(qnty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  function handleAdd(){
    console.log("adding", props.data.title);
    globalAdd(props.data);
  }

  return (
    <div className="product">
      <img src={'/images/' + props.data.image} alt="" />

      <h5>{props.data.title}</h5>

      <div className="prices">
        <label>Total <span className='total'>${getTotal()}</span></label>
        <label>Price <span className='price'>${props.data.price.toFixed(2)}</span></label>
      </div>

      <div className="controls">
        <QuantityPicker onQuantiyChange={handleQuanty} />
        <button onClick={handleAdd} className="btn btn-sm btn-success">Add</button>
      </div>
    </div>
  );
}
export default Product;

/**
 * create a quantity state variable
 * when the quantity changes, update the state variable
 * 
 * use the state variable to calculate the total
 * 
 * 
 */
