export default function DrinkCard({drink}) {
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-row p-2">
      <img
        src={`/drinks/${drink.image}.jpeg`}
        alt=""
        className="rounded-lg w-[33%] object-cover"
      />
      <div className="flex grow flex-col px-5 pt-2 justify-between">
        <h3 className=" font-medium text-base">
          {drink.name}
        </h3>
        <p className="line-clamp-3 overflow-y-auto">{drink.desc}</p>
        <div className="grid grid-cols-2">
            <div className=" flex flex-col items-center">
                <p className="font-medium">Small</p>
                <p className="text-[#FFA16C]">Rp{drink.smPrice}</p>
            </div>
            <div className=" flex flex-col items-center">
                <p className="font-medium">Large</p>
                <p className="text-[#FFA16C]">Rp{drink.lgPrice}</p>
            </div>

        </div>
        {/* <div className="h-[33%] flex flex-row justify-between items-center">
          <p>Size</p>
          <div>
            <button className="border rounded-md mr-3">Small</button>
            <button>Large</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
