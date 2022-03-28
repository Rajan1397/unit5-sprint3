import React from "react";
import styled from "styled-components";

const formDetails = [
  {
    id: 1,
    name: "furntiure",
    price: 5000,
    category: "table",
  },
  {
    id: 2,
    name: "womens tshirt",
    price: 500,
    category: "clothing",
  },
  {
    id: 3,
    name: "iphone 12",
    price: 900000,
    category: "mobile",
  },
  {
    id: 4,
    name: "furntiure",
    price: 5000,
    category: "table",
  },
  {
    id: 5,
    name: "furntiure",
    price: 5000,
    category: "table",
  },
];

const Page = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
`;
const Card = styled.div`
  border: 5px solid black;
  hieght: fit-content;
  width: fit-content;
  padding: 10px;
  font-wight: bold;
`;

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
    <Page>
      {formDetails.map((item) => {
        return (
          <Card key={item.id}>
            <p> name: {item.name}</p>
            <p>price: {item.price}</p>
            <p>category: {item.category}</p>
          </Card>
        );
      })}
    </Page>
  );
}

export default Products;
