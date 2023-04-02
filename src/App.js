import 'bulma/css/bulma.css' 
import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard';
import AlexaImages from './images/alexa.png'
import CortanaImages from './images/cortana.png'
import SiriImages from './images/siri.png'

function App() {
  return (
    <div className="App">
      <div>
        <section className='hero is-primary'>
          <div className='hero-body'>
              <p className='title'>Personal Digital Assistant</p>
          </div>
        </section>
      </div>
          
      <div className='container'>
        <section className='section'>
          <div className='columns'> 
            <div className='column is-4'>
            <ProfileCard title="Alexa" handle="@alexa12" ImgSrc={AlexaImages} description="Alexa was created by amazon"/>
            </div>
            <div className='column is-4'>
            <ProfileCard title="Cortana" handle="@cortana12" ImgSrc={CortanaImages} description="Cortana was created by Microsoft"/>
            </div>
            <div className='column is-4'>
            <ProfileCard title="Siri" handle="@siri12" ImgSrc={SiriImages} description="Siri was created by apple"/>
            </div>

          </div>
        </section>
      </div>
      
      
    
    </div>
  );
}

export default App;
