import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import style from "./list.module.css";

export default function List(props: any) {
  const { data } = props;
  return (
    <div>
      {data?.map((item: any, index: number) => {
        return (
          <article
            key={index}
            className={`${style.articleItem} pt-8 pb-5 border-b border-custom-gray`}
          >
            <div className="flex">
              <div className="flex-1">
                <h2 className="font-bold text-2xl text-color-title">{item.title}</h2>
                <p className="text-base text-color-desc pt-2">{item.desc}</p>
                <div className="pt-[10px]">
                  <div className="flex justify-between h-12 leading-none">
                    <div className="flex items-center text-[13px] text-color-desc">
                      <span>2024-04-05</span>
                      <div className="flex">
                        <div className="ml-4 flex items-center">
                          <HeartIcon className="w-4 h-4" />
                          <span className="ml-1 text-[13px]">4千</span>
                        </div>

                        <div className="ml-4 flex items-center">
                          <ChatBubbleLeftIcon className="w-4 h-4" />
                          <span className="ml-1 text-[13px]">4千</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-[13px] text-color-desc">
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4" />
                        <span className="ml-1 text-[13px]">1千</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-14">
                <Image width="160" height="107" src="/images/thumbnail.jpg" alt="" />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
