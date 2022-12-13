import bryan from './bryandiaz.jpg';
import proj1 from './currproj1.PNG';
import proj2 from './currproj2.PNG';
import proj3 from './currproj3.PNG';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='top-section'>
        <h1 className='name'>Bryan Diaz</h1>
        <img src={bryan} className='image' />
        <h2 className='description-of-self'>Hi! I'm Bryan, an avid Software Developer who's been in the field for a few years now. I'm very passionate about coding, and making music. Check out my projects below!</h2>
      </div>
      <div className='bottom-section'>
        <h2 className='projects-header'>Projects</h2>
        <div className='project'>
          <a href='https://nationsafedrivers.com/' target='_blank'><img src={proj1} className='project-pic'/></a>
          <div className='project-info-div'>
            <h4 className='project-title'>Nation Safe Drivers</h4>
            <p className='project-description'>This is a professional project I worked on for my last client, Nation Safe Drivers. It's essentially the brand new homefront website of the company.</p>
          </div>
        </div>
        <div className='project'>
          <a href='https://crypto-dash-app.vercel.app/' target='_blank'><img src={proj2} className='project-pic'/></a>
          <div className='project-info-div'>
            <h4 className='project-title'>Crypto Dash</h4>
            <p className='project-description'>This is a personal project I worked on utilizing the Coinbase APIs to display real-time crypto pricechart and orderbook data via websockets.</p>
          </div>
        </div>
        <div className='project'>
          <a href='https://www.wedgecocktails.com/ingredients' target='_blank'><img src={proj3} className='project-pic'/></a>
          <div className='project-info-div'>
            <h4 className='project-title'>Wedge Cocktails</h4>
            <p className='project-description'>This is a personal project I created to help those in need of new cocktail ideas, including the top recommendations based on the ingredients one has.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
