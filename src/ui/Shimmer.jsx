const Shimmer = () => {
  return (
    <div
      data-testid="shimmer"
      className="flex flex-wrap gap-4 p-2 w-full justify-center"
    >
      {Array(50)
        .fill("")
        .map((e, index) => (
          <div className="animate-pulse w-80 h-80" key={index}>
            <div className="bg-gray-300 rounded-lg m-2 h-2/4"></div>
            <div className="flex mr-9">
              <div className="w-10 h-9 bg-gray-300 rounded-full mt-2 mr-2"></div>
              <div className="flex flex-col w-full">
                <div className="bg-gray-300 m-2 h-5 "></div>
                {/* <div className='bg-gray-300 m-2 h-5'></div> */}
                <div className="bg-gray-300 m-2 h-5 w-2/4"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export const ShimmerVertical = () => {
  return (
    <div className="flex flex-wrap p-2 w-[80%] mx-auto sm:w-full justify-center">
      {Array(50)
        .fill("")
        .map((e, index) => (
          <div className="animate-pulse w-full sm:flex" key={index}>
            <div className="bg-gray-300 rounded-lg m-2 w-full sm:w-80 h-40"></div>
            <div className="mr-9 w-full">
              <div className="flex flex-col w-full sm:w-full">
                <div className="bg-gray-300 m-2 h-5 "></div>
                <div className="bg-gray-300 m-2 h-5 w-2/4"></div>
                <div className="bg-gray-300 m-2 h-5"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
