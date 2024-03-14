import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './dataSlice';
import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const MyComponent = () => {
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
    return (
      <div> <div className='header'>
        {/* <h1>Amazon</h1> */}
       
        <input 
        type="text" 
        placeholder="Filter by category"  
      />

      <button>Search</button>
      
      </div>
      <button className='viewcart'>view cart</button>
     
        <div className="row">
          {data && data.map((item) => (
            <div key={item.id} className="col-sm-3 col-12 opac1">
              <div className="card">
                <img src={item.image} className="card-img-top" alt="..." style={{height:'200px'}} />
                <div className="card-body">
               
                  <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-title" >{item.category}</h5>
             
                  <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color:'grey' }}>
    {item.description}
</h5>


                  {/* <h5 className="card-title">{item.rating.rate}</h5> */}
               
                
                  {/* <button style={{width:'100%'}} onClick={()=>this.props.addToCart(this.props.selectedItem)}>Add To Cart</button> */}

<link to="/componentCategory">
  <button>Add to Cart</button>
</link>

                </div>
              </div>
            </div>
          ))}
        </div>
   
     

</div>
    );
  };
  export default MyComponent;


  