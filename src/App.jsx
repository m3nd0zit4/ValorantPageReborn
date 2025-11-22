import Hero from "./components/Hero";

const App = () => {
  return ( 
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Hero />

      <section className="z-0 min-h-screen bg-blue-500" />
    </div>
   );
}
 
export default App;