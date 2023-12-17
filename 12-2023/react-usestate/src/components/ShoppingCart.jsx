import { useState } from "react";

const initialCart = [
  {
    id: 1,
    title: "Product 1",
    description: "Description",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description",
  },
];

function ShoppingCart() {
  const [cart, setCart] = useState(initialCart);

  const deleteProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const addProduct = (newProduct) => {
    setCart([...cart, newProduct]);
  };

  const updateProduct = (editProduct) => {
    const changedCart = cart.map((product) =>
      product.id === editProduct.id ? editProduct : product,
    );
    setCart(changedCart);
  };
  return (
    <>
      <h2>ShoppingCart</h2>

      <button
        onClick={() =>
          addProduct({ id: 4, title: "Product 4", description: "Description" })
        }
      >
        Add a product
      </button>

      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            <button
              onClick={() =>
                updateProduct({
                  id: product.id,
                  title: "Updated Product",
                  description: "Updated description",
                })
              }
            >
              Update product
            </button>
          </div>
        ))}
      </div>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </>
  );
}

export default ShoppingCart;
