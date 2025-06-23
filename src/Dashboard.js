// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

   return (
    <div style={{ padding: '20px' }}>
      <h2>Product Page</h2>
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
            <h4>{product.title}</h4>
            <p><strong>₹ {product.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Dashboard;