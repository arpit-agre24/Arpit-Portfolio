const JourneyItem = ({ number, title, description }) => {
    return (
      <div className="flex gap-4 items-center">
        <div className="flex-shrink-0">
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-[#e75a70]
              flex
              items-center
              justify-center
              text-sm
              font-bold
            "
          >
            {number}
          </div>
        </div>
  
        <div
          className="
            bg-[#171717]
            border border-gray-800
            rounded-xl
            p-5
            flex-1
            hover:border-[#e75a70] transition-all duration-300
          "
        >
          <h3 className="text-lg font-semibold">{title}</h3>
  
          <p className="text-gray-400 mt-1 leading-6">{description}</p>
        </div>
      </div>
    );
  };
export default JourneyItem;  