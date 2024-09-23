import './App.css';
import Foter from './components/Footer/Footer.jsx';
import Hero from './components/Hero/hero.jsx';
import Join from './components/Join/Join.jsx';
import Plans from './components/Plans/Plans.jsx';
import Reason from './components/Reasons/Reason.jsx';
import Testimonial from './components/Testimonials/Testimonial.jsx';
import Program from './components/programs/program.jsx';
function App() {
  return (
    <div className="App">
          
<Hero/>
<Program/>
<Reason/>
<Plans/>
<Testimonial/>
<Join/>
<Foter/>

{/* <Footer/> */}

          {/* <Hero/> */}
    </div>
  );
}

export default App;
