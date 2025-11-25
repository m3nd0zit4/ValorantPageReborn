import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";

const App = () => {
  return ( 
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      <About />
    </div>
   );
}
 
export default App;