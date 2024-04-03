import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="relative min-h-[50vh] flex justify-center items-center p-4 bg-[url('/bg.png')] bg-center bg-cover max-h-[50vh]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="font-black text-gray-100 text-6xl font-sans text-center p-4 relative z-10">
        EAT. DRINK. GOLF. DINK.
      </h1>
    </div>

    <div className="bg-white font-sans">
      <div className="flex max-w-7xl m-auto text-black">
        <div className="w-1/2 p-8">
          <h1 className="text-7xl w-1/2 font-bold pb-4 text-emerald-900 uppercase">Welcome To The Wood</h1>
          <p className="leading-8 font text-lg">We’re a regulation 9-hole course nestled among the rolling hills and towering hardwoods of Baldwinsville, NY. Golfers of all levels enjoy the challenge of our unique layout and well-established fairways. While everyone loves The Wood for the course — we’re so much more than golf. We’re a place for friends and family to gather for food, drink, music and fun.</p>
        </div>
        <div className='w-1/2'>
          <img src="sign.jpg" className="object-cover"></img>
        </div>
      </div>
    </div>
    <div className="flex max-w-7xl m-auto bg-emerald-900">
      <div className="w-1/2">
        <img src="pic2.webp" className="object-cover"></img>
      </div>
      <div className="p-8 text-white w-1/2">
      <h1 className="text-7xl font-bold pb-4 text-white uppercase">Come and Visit Us</h1>
        <h2 className="text-2xl">Location:</h2>
            <p>Canton Street Road<br/>Baldwinsville, NY 13027</p>
            <h2 className="text-2xl pt-4">Current Hours:</h2>
            <ul className="list-disc pl-8">
              <li>Monday: Closed</li>
              <li>Tue, Wed, Thu, Sat: 11:30 am - 9:00 pm</li>
              <li>Friday: 11:30 am - 10:00 pm</li>
              <li>Sunday: 12:00 pm - 6:00 pm</li>
            </ul>
            <p className="text-sm pt-2">Kitchen generally closes 30 minutes before closing time.</p>
      </div>
    </div>
    </>
  )
}
