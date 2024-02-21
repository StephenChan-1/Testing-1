
import React, { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
    setTotal(total - product.price);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      {products.map((product) => (
        <div key={product.id} className="flex items-center justify-between p-4 mb-2 bg-white shadow">
          <p className="text-xl">{product.name}</p>
          <p className="text-xl">${product.price}</p>
          <button onClick={() => addToCart(product)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to cart</button>
        </div>
      ))}
      <h1 className="text-4xl font-bold mb-8 mt-16">Cart</h1>
      {cart.map((product) => (
        <div key={product.id} className="flex items-center justify-between p-4 mb-2 bg-white shadow">
          <p className="text-xl">{product.name}</p>
          <p className="text-xl">${product.price}</p>
          <button onClick={() => removeFromCart(product)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Remove from cart
          </button>
        </div>
      ))}
      <h2 className="text-2xl font-bold">Total: ${total}</h2>
    </div>
  );
};

export default App;
