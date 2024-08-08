import { Link } from 'react-router-dom';
import bubbles from '../assets/ll.png';
import cup from '../assets/lgo/cup.png';

export default function Home() {
  return (
    <main>
      <div className="welcome">
        <div className="welcome-text">
          <div className="title-band">
            <img src={cup} alt={cup} className="image cup p-4 sm:p-6" />
            <p className="rudall title mb-4 sm:mb-6 p-4 sm:p-6">you are welcome</p>
          </div>
          <p className="rudall call p-4">
            discover the creative, technical world of Adam Robson
          </p>
        </div>
          
      <figure className="p-2">
        <Link to="/projects">
          <img src={bubbles} alt="dreamscape" className="image dreamscape" />
        </Link>
        
        <figcaption className="rudall caption mt-12">
          Click the image to view some of my projects, and to explore my imagination in action.
        </figcaption>
      </figure>

      </div>
    </main>
  )
}
