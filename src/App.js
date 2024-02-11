import Header from './Components/Header';
import Leftbar from './Components/Leftbar';
import Rightbar from './Components/Rightbar';
import './App.css';


const App = () => {
    return(
        <div className='root-container'>
            <Header />
            <div className='body'>
                <Leftbar/>
                <Rightbar/>
            </div>
        </div>
    )
}

export default App;