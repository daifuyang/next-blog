import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-custom-gray">
      <div className="max-w-container mx-auto px-6 h-[57px] flex items-center justify-between">
        <div className="flex items-center leading-normal">
          <h1 className="font-bold text-lg">全栈成长指南</h1>
          <nav className="ml-10 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
            <ul className="flex space-x-8">
              <li>
                <Link href={"/"}>react</Link>
              </li>
              <li>go</li>
              <li>专栏</li>
              <li>作品</li>
              <li>关于</li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </span>
            </div>
            <input
              type="text"
              name="keywords"
              id="keywords"
              className="block w-full rounded-md border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="请输入关键词"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
