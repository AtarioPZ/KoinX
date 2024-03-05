function SideContent() {
    return (
      <div className="container mx-auto px-4">
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg border border-gray-200 mb-4">
          <h2 className="text-2xl font-semibold text-white mb-2">Get Started for Free</h2>
          <p className="text-gray-600 text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin velit ac erat pharetra, at ultrices sapien pulvinar.</p>
          <img src="https://i.ibb.co/gRcyGgJ/test.png" alt="Test" className="mb-4" />
          <button className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Get Started for Free -&gt;
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-2">Trending Coins</h2>
          
        </div>
      </div>
    );
  }
  
  export default SideContent;
  