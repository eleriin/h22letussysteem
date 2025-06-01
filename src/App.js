import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className='container max-w-md bg-white shadow-md rounded-md p-6'>
        <h1 className="text-2xl font-bold text-teal-800 mb-8 text-center">
          Tere tulemast hääletussüsteemi!
        </h1>
        <button className='mb-6 w-full bg-teal-500 border border-green-800 px-4 py-2 text-white text-xl py-3 rounded hover:bg-blue-700 transition'> 
          Loo uus küsimus
        </button>
        <div>
          <h2 className='text-xl font-semibold mb-3 text-teal-800'>Küsimuste nimekiri:</h2>
          <p className='text-gray-500'>Küsimused puuduvad</p>
        </div>

      </div>        
    </div>
  );
}

export default App;

