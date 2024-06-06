import {BrowserRouter} from 'react-router-dom';

import {About, Contact, Experience, Feedbacks,
Hero, Navbar, Tech, Works, StarCanvas} from 
'./components';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern 
          bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
