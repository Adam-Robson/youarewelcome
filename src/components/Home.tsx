import { Link } from 'react-router-dom';
import bubbles from '../assets/ll.png';
import cup from '../assets/lgo/cup.png';

export default function Home() {
  return (
    <main>
      <div className="welcome">
        <div className="welcome-text">
          <div className="welcome-title">
          <img src={cup} alt={cup} className="image cup p-4" />
            <h4 className="rudall my-4 p-4 flex items-baseline">you are welcome</h4>
          </div>
          <p className="roboto-slabby p-4 text-xs">
            discover the creative, technical world of Adam Robson
          </p>
        </div>
       
            
      <figure className="p-2">
        <Link to="/projects">
          <img src={bubbles} alt="dreamscape" className="image dreamscape" />
        </Link>
        
        <figcaption className="rudall mt-12 text-sm figcaption">
          Click the image to view some of my projects, and to explore my imagination in action.
        </figcaption>
      </figure>

      </div>
    </main>
  )
}
