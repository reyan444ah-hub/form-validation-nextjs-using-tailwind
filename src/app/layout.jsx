
import "./globals.css"
export default function Rootlayout ({children}) {
  return (

    <>
    <html>
      <head>
        <title>Form Validation</title>
        <meta name="decription" content="Built with tailwind , js and  next js"/> 
      </head>
      <body>
        {children}
      </body>
    </html>
    
    
    </>
  )
  
}