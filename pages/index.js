import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="relative min-h-[100vh] flex justify-center items-center p-4 bg-center bg-[url('/bg.png')] bg-cover">
      <div className="absolute inset-0"></div>
      <h1 className="font-black [text-shadow:_0_5px_2px_rgb(0_0_0_/_40%)] font-chelsea text-gray-100 text-5xl text-center p-4 relative z-10">
        EAT. DRINK. GOLF. DINK.
      </h1>
    </div>

    <div className="font-goudos">
      <div className="lg:flex bg-black m-auto text-black bg-white ">
        <div className="w-full lg:w-1/2 p-8 bg-white">
          <div className="max-w-lg ml-auto">
            <h1 className="text-5xl w-full sm:text-7xl pb-4 text-primary uppercase font-black">Welcome To The Wood</h1>
            <p className="leading-8 font text-lg">Experience our regulation 9-hole course, tucked within the scenic rolling hills and majestic hardwoods of Baldwinsville, NY. With its distinctive layout and mature fairways, The Wood offers a challenge for golfers of all skill levels. But there's more to us than just golf — we're a vibrant destination where friends and family come together for great food, refreshing drinks, live music, and unforgettable memories.</p>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/barn.png" className='object-cover h-full w-full'></img>
        </div>
      </div>
    </div>
    <div className="font-goudos">
      <div className="lg:flex bg-black m-auto text-black bg-white ">
        <div className="w-1/2">
          <img src="/fish.png" className='object-cover h-full w-full'></img>
        </div>
        <div className="w-full lg:w-1/2 p-8 bg-white">
          <div className="max-w-lg mr-auto">
            <h1 className="text-5xl w-full sm:text-7xl pb-4 text-primary uppercase font-black">Dining at The Wood</h1>
            <p className="leading-8 font text-lg">Unwind after a round of golf with a delicious meal and refreshing drinks right inside our clubhouse. From savory burgers and crisp salads to handcrafted cocktails and local brews, our menu is designed to satisfy every craving. Whether you're here for lunch, dinner, or one of our weekly specials, it's the perfect spot to gather with friends and family. Enjoy great food, live music, and a relaxed atmosphere — all just steps from the course.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
