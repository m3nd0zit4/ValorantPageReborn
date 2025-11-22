import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return ( 
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Hero />

      <About />
    </div>
   );
}
 
export default App;