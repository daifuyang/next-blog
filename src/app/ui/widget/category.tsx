import Link from "next/link";

export default function Category(props: any) {
  const { data } = props;

  const getCategoryUi = (category: any = []) => {
    return category?.map((item: any) => {
      let children = null;
      if (item?.children?.length > 0) {
        children = <ul className="ml-4">{getCategoryUi(item.children)}</ul>;
      }

      return (
        <li key={item.id} className="mt-2">
          <Link href={"/"}>{item.title}</Link>
          {children}
        </li>
      );
    });
  };

  return (
    <div className="mb-10">
      <h2 className="text-color-title text-base font-bold mb-[22px]">分类</h2>
      <ul>{getCategoryUi(data)}</ul>
    </div>
  );
}
