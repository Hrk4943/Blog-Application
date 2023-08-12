import React,{useState} from 'react'

function Header() {
    const [header, setHeader] = useState(false);
  return (
    <>
<div>
        <nav className="px-2 sm:px-4 py-2.5 bg-slate-300 fixed w-full z-20 top-0 left-0 border-b">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 h-12">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">

                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-black' >
                  <a href="/">My Blogs</a>
                  
                </div>

                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-700 focus:border"
                    onClick={() => setHeader(!header)}
                  >
                    {header ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  header ? "block" : "hidden"
                }`}
              >
                <ul className="flex items-center justify-center flex-col space-y-8 md:flex-row md:space-x-6 md:space-y-0">
                  <li className="text-gray-800 hover:text-blue-600">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-gray-500 hover:text-blue-600">
                    <a href="/">Blog</a>
                  </li>
                  <li className="text-gray-500 hover:text-blue-600">
                    <a href="/">About US</a>
                  </li>
                  <li className="text-gray-500 hover:text-blue-600">
                    <a href="/">Contact US</a>
                  </li>
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </>
  )
}

export default Header