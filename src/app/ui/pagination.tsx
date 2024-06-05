import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function Pagination() {
  return (
    <div className="flex items-center justify-end bg-white pt-3 pb-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="flex items-center">
        <span className="mr-6 text-color-desc">当前1-10条，总计200条</span>
        <nav className="inline-flex" aria-label="Pagination">
          <a
            href="#"
            className="relative inline-flex items-center justify-center w-[30px] h-[30px] rounded-l-md mr-2 text-gray-400  hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900  hover:bg-gray-50 focus:outline-offset-0" */}
          <a
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center justify-center w-[30px] h-[30px] mr-2 rounded-lg border border-indigo-600 text-sm font-semibold text-indigo-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            1
          </a>
          {new Array(5).fill("").map((item, index) => {
            return (
              <a
                key={index}
                href="#"
                className="relative inline-flex items-center justify-center w-[30px] h-[30px] rounded-lg mr-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                {index + 2}
              </a>
            );
          })}
          <a
            href="#"
            className="relative inline-flex items-center justify-center w-[30px] h-[30px] rounded-r-md text-gray-400  hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  );
}
