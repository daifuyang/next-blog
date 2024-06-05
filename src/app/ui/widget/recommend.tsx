import Link from "next/link";

export default function Recommend(props: any) {
  const { data=[] } = props;
  return (
    <div className="mb-10">
      <h2 className="text-color-title text-base font-bold mb-[22px]">推荐</h2>
      <ul className="flex flex-col">
        {data?.map((item: any) => {
          return (
            <div className="mb-2 text-base text-color-title" key={item.id}>
              <Link href="/">{item.title}</Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
