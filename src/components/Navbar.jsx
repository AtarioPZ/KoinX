function Navbar() {
    return (
      <div className="flex justify-between items-center px-4 py-2">
        <img src="https://i.ibb.co/BPgkqdL/logo.png" alt="KoinX" className="w-20 h-auto mb-2" />        
        <div className="flex">
          <button className="mr-4">Crypto Taxes</button>
          <button className="mr-4">Free Tools</button>
          <button className="mr-4">Resource Center</button>
          <button className="bg-blue-600 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get Started</button>          
        </div>
      </div>
    );
  }
  
  export default Navbar;
  