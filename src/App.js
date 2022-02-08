import './App.css';
import {Route} from 'react-router-dom'
import MultistepForm from './components/MultistepForm';

function App() {
  return (
    <>
    <Route path = "/" exact component = {MultistepForm}/>
    </>
  );
}

export default App;
