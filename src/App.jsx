function App() {
  return (
    <>
      <div className="bg-zinc-800 w-full h-full">
        {/* navbar with glassmorphism effect */}
        <nav className="bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter border border-white border-opacity-20 fixed top-0 left-0 w-full z-10">
          <div className="container mx-auto flex justify-between items-center py-4">
            <ul className="flex space-x-4 text-white">
              <li>MineActualCraft</li>
              <li>Github</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
