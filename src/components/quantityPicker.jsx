import './quantityPicker.css';
import { useState } from 'react';

function QuantityPicker(props) {
  let [quantity, setQuantity] = useState(1);

  function increase() {
    let val = quantity + 1;
    setQuantity(val);
    props.onQuantiyChange(val);
  }

  function decrease() {
    if (quantity === 1) return;
    let val = quantity - 1;
    setQuantity(val);
    props.onQuantiyChange(val);
  }

  return (
    <div className="qt-picker">
      <button className="btn btn-sm btn-outline-primary" disabled={quantity === 10} onClick={increase}>
        +
      </button>
      <label>{quantity}</label>
      <button className="btn btn-sm btn-outline-primary" disabled={quantity === 1} onClick={decrease}>        
        -
      </button>
    </div>
  );
}

export default QuantityPicker;
