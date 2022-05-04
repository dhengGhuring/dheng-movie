import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import './style/LandingPage.css';
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
    </div>
  );
}

export default App;
