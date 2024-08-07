import bubbles from './assets/ll.png';
import './App.css'

export default function App() {
  return (
    <main>
      <div className="welcome">
        <h1 className="playwrite-ng-modern-ll greeting">you are welcome</h1>
        <img src={bubbles} alt="dreamscape" className="image bubble" />
        <h2 className="playwrite-ng-modern-ll">by Adam Robson</h2>
      </div>
    </main>
  )
}
