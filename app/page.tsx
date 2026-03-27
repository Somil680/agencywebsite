"use client"


export default function Home() {
  return (
   <div>
  {/* Laptop / Desktop Image */}
  <img
    src="./img.png"
    alt="Logo"
    className="hidden md:block"
  />

  {/* Mobile Image */}
  <img
    src="./img2.png"
    alt="Logo"
    className="block md:hidden"
  />
</div>
  )
}