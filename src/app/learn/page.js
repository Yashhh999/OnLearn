import Link from "next/link";

export default function Page() {
  return (
    <>
    <div className=" h-screen">
      <div className="justify-center flex">
        <div className="border-2 h-1/3 w-1/3 border-violet-300 mt-16 flex">
          <Link href="/learn/webdev" className="m-3">
            <h1 className="text-2xl font-medium border-b-2 w-52 border-gray-500">HTML , CSS & JS</h1>
            <h1 className="text-gray-400">Learn HTMl , CSS & JS for <br/> web development including <br/> animations and projects</h1>
            <button className="bg-blue-500 mt-2 py-1 rounded-md text-white px-20 hover:bg-orange-500 hover:text-orange-100 transition duration-500 ease-in-out transform hover:scale-110">Start</button>
          </Link>
          <div className="flex flex-grow justify-end items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaYZuYkbrjQdPUUNYuAvN-foIW1eHy4tLz3XWPSoMQQ&s" alt="htmlcssjs" className=" rounded-lg m-2 h-36"/>
          </div>
        </div>


        <div className="border-2 ml-8 h-1/3 w-1/3 border-violet-300 mt-16 flex">
          <Link href="/learn/webdev" className="m-3">
            <h1 className="text-2xl font-medium border-b-2 w-52 border-gray-500">MERN STACK</h1>
            <h1 className="text-gray-400">Learn MERN Stack <br/>development including <br/>projects.</h1>
            <button className="bg-blue-500 mt-2 py-1 rounded-md text-white px-20 hover:bg-sky-700 hover:text-orange-100 transition duration-500 ease-in-out transform hover:scale-110">Start</button>
          </Link>
          <div className="flex flex-grow justify-end items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-aXWWJ4sm2jdZ3FHT2GdEcyoJQKI9bQTjns0t7wPIA&s" alt="htmlcssjs" className=" rounded-lg m-2 h-36"/>
          </div>
        </div>
        </div>

        <div className="justify-center flex">
        <div className="border-2 h-1/3 w-1/3 border-violet-300 mt-16 flex">
          <Link href="/learn/webdev" className="m-3">
            <h1 className="text-2xl font-medium border-b-2 w-52 border-gray-500">DSA</h1>
            <h1 className="text-gray-400">Learn Data Structure<br/>and algorithm <br/>with java.</h1>
            <button className="bg-blue-500 mt-2 py-1 rounded-md text-white px-20 hover:bg-yellow-600 hover:text-orange-100 transition duration-500 ease-in-out transform hover:scale-110">Start</button>
          </Link>
          <div className="flex flex-grow justify-end items-center">
            <img src="https://miro.medium.com/v2/resize:fit:1024/0*uO_vEPnGxheGScdI.jpg" alt="htmlcssjs" className=" rounded-lg m-2 h-36"/>
          </div>
          </div>
          
          <div className="border-2 ml-8 h-1/3 w-1/3 border-violet-300 mt-16 flex">
          <Link href="/learn/ml" className="m-3">
            <h1 className="text-2xl font-medium border-b-2 w-52 border-gray-500">Machine Learning</h1>
            <h1 className="text-gray-400">Learn Machine Learning <br/>theory and programming<br/> with python.</h1>
            <button className="bg-blue-500 mt-2 py-1 rounded-md text-white px-20 hover:bg-sky-700 hover:text-orange-100 transition duration-500 ease-in-out transform hover:scale-110">Start</button>
          </Link>
          <div className="flex flex-grow justify-end items-center">
            <img src="https://digitalscientists.com/wp-content/uploads/2020/07/machine-learning-thumbnail.png" alt="htmlcssjs" className=" rounded-lg m-2 h-36"/>
          </div>
        </div>


        </div>
      </div>
      
    </>
  )
}
