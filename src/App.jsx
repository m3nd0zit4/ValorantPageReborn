import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Story from "./components/Story"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return ( 
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Story />
      <Contact />
      <Footer />
    </div>
   );
}
 
export default App;