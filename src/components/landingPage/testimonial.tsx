export default function Testimonial() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
          What our <span className="text-blue-500">clients</span> say
        </h1>

        <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-10">
          <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “The pay estimation feature is a game-changer. I always know what
              to expect!”.
            </p>

            <div className="mt-6 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Keyur Bilgi</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Software Engineer
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “This tool has transformed how I manage my hours! I can finally
              see where my time goes”.
            </p>

            <div className="mt-6 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">April</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Marketing Manager at Stech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
