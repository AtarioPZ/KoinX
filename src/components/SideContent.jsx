function SideContent() {
    return (
      <div className="container mx-auto px-4">
        <div className="w-full rounded-lg bg-[#0052fe] text-white p-8 flex flex-col items-center gap-y-5">
            <h1 className="text-xl font-medium text-center tracking-wide">
                Get Started with KoinX <br /> for FREE
            </h1>
            <p className="text-center text-sm tracking-wide">
                With our range of features that you can equip for free, KoinX allows you
                to be more educated and aware of your tax reports.
            </p>
            <img src={"https://i.ibb.co/gRcyGgJ/test.png"} alt="" width={210} height={100} />
            <button className="px-4 py-2 bg-white text-black rounded-md font-medium">
                Get Started for FREE
            </button>
            </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-2">Trending Coins</h2>
          
        </div>
      </div>
    );
  }
  
  export default SideContent;
  