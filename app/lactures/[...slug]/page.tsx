// export default async function LacturesList({params}:{
//        params:Promise<{slug:string[]}>
// }) {

//       const {slug} = await params;
//       console.log(slug)

//       if(slug.length==3){
//             return
//             (
//                   <div>
//                         lacture details 1
//                   </div>
//             )
//       }

//       if(slug.length==2){
//             return
//             (
//                   <div>
//                         lacture details 2
//                   </div>
//             )
//       }

//       return
//       (
//             <div>
//                   all lacture
//             </div>
//       )
// }

// // type PageProps = {
// //   params: Promise<{
// //     slug: string[];
// //   }>;
// // };

// // export default async function LecturesList({ params }: PageProps) {
// //   const { slug } = await params;

// //   console.log(slug);

// //   return (
// //     <div>
// //       <h1>Lectures List</h1>
// //       <p>{slug.join(" / ")}</p>
// //     </div>
// //   );
// // }


type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function LecturesList({ params }: Props) {
  const { slug } = await params;

  console.log(slug);

  if (slug.length === 3) {
    // Your logic here
  }

  return (
    <div>
      <h1>Lectures List</h1>
      <p>{slug.join(" / ")}</p>
    </div>
  );
}