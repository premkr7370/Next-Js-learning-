// export default  function Product(){
//       const products =[
//             {
//                   id:1,
//                   name:"Product 1"
//             },
//             {
//                   id:2,
//                   name:"Product 1"
//             },
//             {
//                   id:3,
//                   name:"Product 1"
//             },
//             {
//                   id:4,
//                   name:"Product 1"
//             }
//       ]

//       return (
//             <div>
//                   my products

//                   <ul>
//                         <li>
//                               product 1
//                         </li>
//                   </ul>
//             </div>
//       )
// }

export async function generateMetadata({params}:{param:Promise<{id:string}>}){
  const {id}=await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/postts/${id}`);
  const data = await res.json();
  return {
    title:data.title,
    description:data.body,
  }
}


import Link from "next/link";

const products = [
  { id: 101, name: "Laptop" },
  { id: 102, name: "Mobile" },
  { id: 103, name: "Keyboard" },
];

export default function ProductsPage() {
  return (
    <div>
      <h1>Products List</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <Link href={`/products/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}