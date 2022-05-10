import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import './style/LandingPage.css';
import Superhero from './components/Superhero';
function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End Intro Section */}

      {/* Movie List Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End Movie List Section */}

      {/* Superhero List */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* End Superhero List */}
    </div>
  );
}

export default App;
