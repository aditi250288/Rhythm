import { Link } from "react-router-dom";

const HelloComponent = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="z-10 bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-lg p-8 text-center text-white space-y-8">
        <h1 className="text-5xl font-bold">Welcome to Rhythm of heart</h1>
        <div className="space-x-4">
          <Link 
            to="/login" 
            className="bg-blue-400 px-6 py-2 rounded-full font-semibold text-white hover:bg-blue-500 transition"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="bg-blue-400 px-6 py-2 rounded-full font-semibold text-white hover:bg-blue-500 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelloComponent;
