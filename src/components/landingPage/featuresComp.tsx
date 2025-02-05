import {
  ArrowRightCircleIcon,
  BarChart2Icon,
  Clock10,
  DollarSignIcon,
} from "lucide-react";

export default function FeaturesComp() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
            explore our <br />
            <span className="underline decoration-blue-500"> Features</span>
          </h1>

          <p className="mt-4 text-gray-500 dark:text-gray-300 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
            <div className="space-y-3 rounded-xl border-2 border-blue-400 p-8 dark:border-blue-300">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <Clock10 />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                Easy Hour Logging
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Log your hours with just a few clicks. Our intuitive interface
                makes it easy to track your time, whether you&apos;re working
                on-site or remotely.
              </p>

              <a
                href="#"
                className="inline-flex transform rounded-full bg-blue-100 p-2 capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:bg-blue-500 dark:text-white dark:hover:text-blue-500 rtl:-scale-x-100"
              >
                <ArrowRightCircleIcon />
              </a>
            </div>

            <div className="space-y-3 rounded-xl border-2 border-blue-400 p-8 dark:border-blue-300">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <DollarSignIcon />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                Pay Estimation
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Get instant pay estimates for the week and month. Know exactly
                what to expect in your paycheck, including overtime and sick
                pay.
              </p>

              <a
                href="#"
                className="inline-flex transform rounded-full bg-blue-100 p-2 capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:bg-blue-500 dark:text-white dark:hover:text-blue-500 rtl:-scale-x-100"
              >
                <ArrowRightCircleIcon />
              </a>
            </div>

            <div className="space-y-3 rounded-xl border-2 border-blue-400 p-8 dark:border-blue-300">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <BarChart2Icon />
              </span>

              <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                Detailed Analytics
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Access comprehensive analytics on your work patterns, overtime,
                sick leave, and contracted hours. Make informed decisions about
                your work-life balance
              </p>

              <a
                href="#"
                className="inline-flex transform rounded-full bg-blue-100 p-2 capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:bg-blue-500 dark:text-white dark:hover:text-blue-500 rtl:-scale-x-100"
              >
                <ArrowRightCircleIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
