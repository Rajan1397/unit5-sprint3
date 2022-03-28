import React from "react";

const formDetails = [
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
  {
    name: "jeans",
    price: 740,
    category: "mens wear",
  },
];

function Products() {
  fetch(`http://localhost:3001/product`, {
    method: "POST",
    body: JSON.stringify(formDetails),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res));

  return (
    <>
      <div>Products</div>
    </>
  );
}

export default Products;
