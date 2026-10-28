// exports default async function ProductDetails({params}: {params: Promise<{id: string[]}>}){
//       const {id} = await params;
//       return(
//             <div>
//                   Product Details for product {id}
//             </div>
//       )
// }

// type Props = {
//   params: Promise<{ id: string }>;
// };

// const products = [
//   { id: 101, name: "Laptop", price: 50000 },
//   { id: 102, name: "Mobile", price: 20000 },
//   { id: 103, name: "Keyboard", price: 1500 },
// ];

// export default async function ProductDetails({ params }: Props) {
//   const { id } = await params;

//   const product = products.find(
//     (item) => item.id === Number(id)
//   );

//   if (!product) {
//     return <h1>Product Not Found</h1>;
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>Product ID: {product.id}</p>
//       <p>Price: ₹{product.price}</p>
//     </div>
//   );
// }





type Props = {
  params: Promise<{ id: string }>;
};

const products = [
  { id: 101, name: "Laptop", price: 50000 },
  { id: 102, name: "Mobile", price: 20000 },
  { id: 103, name: "Keyboard", price: 1500 },
];

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Product ID: {product.id}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}
