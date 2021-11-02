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
} from '../components';
import { NavProvider } from '../context';
import { useAnimations } from '../hooks';

const Home = () => {
  useAnimations();

  return (
    <div className="app">
      <NavProvider>
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
      </NavProvider>
    </div>
  );
};

export default Home;
