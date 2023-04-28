import './product.css';
import QuantityPicker from './quantityPicker';
import { useEffect } from 'react';
//import the UseEffect and create the hook, please

function Product(props) {
    
    useEffect(function(){
        //when the component load
        console.log("hello, i'm a product");
         
        
    },[]);

    return (
        <div className="product">

            <img src={"/images/"+props.data.image} alt="" />

            <h5>{props.data.title}</h5>

            <div className="prices">    
                <label>Total {props.data.price.toFixed(2)}</label>
                <label>Price {props.data.price.toFixed(2)}</label>
            </div>
            <QuantityPicker />
            <button>Add</button>

        </div>
    )

}
export default Product;

//Render the product in the Catalog 5 times
//Render the price and the total from each product and add the button to add products