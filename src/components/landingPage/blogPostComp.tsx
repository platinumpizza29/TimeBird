export default function BlogPostComp() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
            recent posts{" "}
          </h1>

          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <img
              className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
              src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="mt-8">
              <span className="uppercase text-blue-500">category</span>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                What do you want to know about UI
              </h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est
                asperiores vel, ab animi recusandae nulla veritatis id tempore
                sapiente
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-300"
                  >
                    John snow
                  </a>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    February 1, 2022
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-block text-blue-500 underline hover:text-blue-400"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div>
            <img
              className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="mt-8">
              <span className="uppercase text-blue-500">category</span>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                All the features you want to know
              </h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est
                asperiores vel, ab animi recusandae nulla veritatis id tempore
                sapiente
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-300"
                  >
                    Arthur Melo
                  </a>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    February 6, 2022
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-block text-blue-500 underline hover:text-blue-400"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div>
            <img
              className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
              src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />

            <div className="mt-8">
              <span className="uppercase text-blue-500">category</span>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                Which services you get from Meraki UI
              </h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est
                asperiores vel, ab animi recusandae nulla veritatis id tempore
                sapiente
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-300"
                  >
                    Tom Hank
                  </a>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    February 19, 2022
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-block text-blue-500 underline hover:text-blue-400"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
