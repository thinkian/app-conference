import {
  About,
  Contact,
  Countdown,
  FAQ,
  Footer,
  Header,
  Hero,
  Newsletter,
  Schedule,
  Speakers,
  Sponsors
} from './components';
import { useAnimations } from './hooks';

const App = () => {
  useAnimations();

  return (
    <div className="app">
      <Header />
      <Hero />
      <Countdown />
      <About />
      <Schedule />
      <Speakers />
      <Newsletter />
      <FAQ />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
