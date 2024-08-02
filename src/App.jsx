import { Link } from 'react-router-dom';

// import './App.css';
function App() {
  return (
    //  for testing purposes only
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="mx-auto my-auto">
        <Link to="/register" className="text-tertiary cursor-pointer ">
          Register
        </Link>
      </div>
    </main>
  );
}

export default App;
