import '../styles/App.css';
import './Calculator'
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>OhmKangz</h1>
      </header> */}
      <img className='background-img' src={`${process.env.PUBLIC_URL}/vapecloud_bg.jpg`} alt='background' />
      <Calculator />

    </div>
  );
}

export default App;
