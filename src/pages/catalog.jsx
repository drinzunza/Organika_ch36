import Product from '../components/product';
import './catalog.css';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

const Catalog = () => {
  const [products, setProducts] = useState([]);  
  const [category, setCategory] = useState([]);
  const [prodsToDisplay, setprodsToDisplay] = useState([]);

  //when componet loads, do something
  useEffect(function () {
    loadCatalog();
  }, []);

  function loadCatalog() {
    //get the product from the service
    let service = new DataService();
    let prods = service.getProducts();
    console.log(prods);
    setProducts(prods);
    let cats = ['Farm', 'Patch', 'Garden', 'Store'];
    setCategory(cats);
    setprodsToDisplay(prods);
  }

  function filter(category) {
    console.log(category);

    let list = [];
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
    }
    setprodsToDisplay(list);
  }

  return (
    <div className="page catalog">
      <h2> check our amazing catalog</h2>
      <h5> We have {products.length} products for you!!</h5>

      {category.map((c) => (
        <button key={c} onClick={() => filter(c)} className="btn btn-sm btn-outline-success btn-filter">
          {c}
        </button>
      ))}
      <br />

      {prodsToDisplay.map((p) => (
        <Product key={p._id} data={p} />
      ))}
    </div>
  );
};

export default Catalog;
