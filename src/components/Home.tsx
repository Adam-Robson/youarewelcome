import { Link } from 'react-router-dom';
import bubbles from '../assets/ll.png';

export default function Home() {
  return (
    <main>
      <div className="welcome">
        <h1 className="playwrite-ng-modern-ll greeting mb-12">you are welcome</h1>
        
        <Link to="/projects" className="bubble">
        <img src={bubbles} alt="dreamscape" className="image bubble" />
        </Link>
        
        
        <h2 className="playwrite-ng-modern-ll mt-12">by Adam Robson</h2>
      </div>
    </main>
  )
}
