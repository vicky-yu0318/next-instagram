interface ItemProps {
  name: string;
  avatar: string;
}

const Item: React.FC<ItemProps> = ({ name, avatar }) => {
  return (
    <div className="text-center">
      <div
        className="w-[56px] h-[56px] ring-2 border-2 border-white ring-red-500 rounded-full mx-[11px]"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <span className="text-xs">{name}</span>
    </div>
  );
};

export default Item;
