import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './womenSlice';
import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addItemToCart } from './addToCart';
import { Link } from 'react-router-dom';

const MyComponent = () => {
  const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.data);
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error}</div>;
    }

     
  
    const handleAddToCart = (item, quantity) => {
      dispatch(addItemToCart({ ...item, quantity }));
      
      setQuantity(1);
    };


    return (
      <div className="container"> 
     
        <div className="row">
          {data && data.map((item) => (
            <div key={item.id} className="col-sm-3 col-12 opac1">
              <div className="card card border-light" style={{height:'100%'}}>
                <img src={item.image} className="card-img-top" alt="..." style={{height:'200px'}} />
                <div className="card-body">
               
                  <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-title" >{item.category}</h5>
             
                  <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color:'grey' }}>
    {item.description}
</h5>

<div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ marginRight: 'auto' }}>
    Quantity: 
    <input
      type="number"
      style={{ width: '50px', marginLeft: '5px' }}
      value={quantity}
      onChange={(e) => setQuantity(parseInt(e.target.value))}
    />
  </div>

 
  <Link to="/viewCart">
  <button
    className="btn btn-sm mb-2"
    style={{ border:'1px solid black', backgroundColor:'blue', color:'white' }}
    onClick={() => handleAddToCart(item)}
  >
    Add to Cart
  </button>
  </Link>
</div>

                </div>
              </div>
            </div>
          ))}
        </div>
   
     

</div>
    );
  };
  export default MyComponent;


  