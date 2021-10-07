import logo from './logo.svg';
import './App.css';

function App() {
  const contentArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
  return (
    <div className="App">
      <div className="purple-box mb-5"></div>
      <div className="d-flex white-box-container">
      {contentArray.map((item) => {
        return(
          <div className="btn white-box mb-2">test</div>
        )
      })}
      </div>      
    </div>
  );
}

export default App;
