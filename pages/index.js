import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="relative min-h-[100vh] flex flex-col justify-center items-center p-4 bg-center bg-[url('/bg.png')] bg-cover">
      <div className=""></div>
      
      <h1 className="font-black [text-shadow:_0_5px_2px_rgb(0_0_0_/_40%)] font-chelsea text-gray-100 text-5xl text-center p-4 relative z-10">
        EAT. DRINK. GOLF. DINK.
      </h1>
      
      <div className="bg-black/75 text-white font-bold hover:cursor-pointer font-chelsea py-2 px-4 mt-4 rounded">
        Contact Us
      </div>
    </div>

    <div className="font-goudos">
      <div className="sm:flex bg-black m-auto text-black bg-white">
        <div className="w-full sm:w-1/2 p-8 bg-white">
          <div className="max-w-lg ml-auto m-8">
            <h1 className="text-5xl w-full sm:text-7xl pb-4 text-primary uppercase font-black">Welcome To The Wood</h1>
            <p className="leading-8 font text-lg">Experience our regulation 9-hole course, tucked within the scenic rolling hills and majestic hardwoods of Baldwinsville, NY. With its distinctive layout and mature fairways, The Wood offers a challenge for golfers of all skill levels. But there&apos;s more to us than just golf — we&apos;re a vibrant destination where friends and family come together for great food, refreshing drinks, live music, and unforgettable memories.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <img src="/barn.png" className='object-cover h-full w-full'></img>
        </div>
      </div>
    </div>
    <div className="font-goudos">
      <div className="sm:flex sm:flex-row-reverse bg-black m-auto text-black bg-white ">
        <div className="w-full sm:w-1/2 p-8 bg-white">
          <div className="max-w-lg mr-auto">
            <h1 className="text-5xl w-full sm:text-7xl pb-4 text-primary uppercase font-black">Dining at The Wood</h1>
            <p className="leading-8 font text-lg">Unwind after a round of golf with a delicious meal and refreshing drinks right inside our clubhouse. From savory burgers and crisp salads to handcrafted cocktails and local brews, our menu is designed to satisfy every craving. Whether you&apos;re here for lunch, dinner, or one of our weekly specials, it&apos;s the perfect spot to gather with friends and family. Enjoy great food, live music, and a relaxed atmosphere — all just steps from the course.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <img src="/fish.png" className='object-cover h-full w-full'></img>
        </div>
      </div>
      <div className="bg-primary text-white text-lg">
        <div className="mx-auto p-8 justify-left max-w-7xl">
          <img src="EDG.webp" className="invert mb-4 h-32 mx-auto"/>
          <h1 className="sm:w-1/2 text-center mx-auto">Our newly-renovated clubhouse was once home to a team of 1,600 lb draft horses. Now the old barn houses a different kind of draft – from microbrews – to local favorite Budweiser. And, of course, we have a full bar offering all your favorite specialties. Our new kitchen is serving mouth-watering dishes which can be enjoyed in our dining room or outside on the huge deck overlooking the course. We’re the perfect place to end your round, just hang out with friends, or host an event. We hope to see you soon.</h1>
        </div>
      </div>
      <div className="bg-black sm:flex">
        <div className="sm:w-1/3 text-white text-center font-goudos p-8">
          <h1 className="text-lg uppercase font-bold"> Contact Information</h1>
          <span>The Wood</span>
          <br/>
          <span>7439 Canton Street Rd</span>
          <br/>
          <span>Baldwinsville, NY 13207</span>
          <br/>
          <span>(315) 635-9826</span>
          <br/>
          <span>contact@thewoodbville.com</span>
        </div>

        <div className="sm:w-1/3 text-white text-center font-goudos p-8">
          <img src="logo.webp" className="mx-auto" alt="The Wood" />
        </div>

        <div className="sm:w-1/3 text-white text-center font-goudos p-8">
          <h1 className="text-lg uppercase font-bold"> Hours </h1>
          <div className="text-base">
            <p><strong>Monday - Thursday:</strong> 11:30 AM - 8:30 PM</p>
            <p><strong>Friday:</strong> 11:30 AM - 10:00 PM</p>
            <p><strong>Saturday:</strong> 11:30 AM - 8:30 PM</p>
            <p><strong>Sunday:</strong> 11:30 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
