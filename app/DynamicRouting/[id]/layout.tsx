 export default function ProductLayout({
      children,
      }: Readonly<{
            children: React.ReactNode;
      }>
 ) {
      return(
            <div>
                  <div>
                        <h1>New Arrivals</h1>
                  </div>
                  {children}


            </div>
      )
 }