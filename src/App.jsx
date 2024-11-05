import MinecraftData from "./components/MinecraftData";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-zinc-800 w-full h-screen">
        <Navbar />
        <MinecraftData/>
      </div>
    </>
  );
}

export default App;
