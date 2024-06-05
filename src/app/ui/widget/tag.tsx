export default function Tag(props: any) {
  const { data = [] } = props;
  return (
    <div className="mb-10">
      <h2 className="text-color-title text-base font-bold mb-[22px]">标签</h2>
      <ul className="flex items-start flex-wrap">
        {data?.map((item: any) => {
          return (
            <div
              className="flex mb-[10px] mr-2 px-4 py-2 border border-custom-gray bg-custom-gray text-sm rounded-[100px]"
              key={item.id}
            >
              {item.name}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
