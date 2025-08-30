import Gallery from './components/InfiniteImageMarquee';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import { Events } from './components/Events';
export default function App() {
  return (
    <div>
      <Events/>
      <Gallery/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}
