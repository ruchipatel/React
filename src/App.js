import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" homemenu="Home" aboutmenu="About"></Navbar>
    <TextForm heading="Enter text to conver case"></TextForm>
  {/* <Navbar/>*/}
    </>
  )
}

export default App;
