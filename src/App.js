import './App.css';
import {useSelector} from 'react-redux';
import Likes from "./components/Likes";
import Title from "./components/Title";
import Comments from "./components/Comments";
import Spinner from "./components/Spinner";

function App() {

  const fetchError = useSelector(state => state.appReducer.error)

  return (
    <div className="App">
      <div className="wrap">
        <Spinner />
        <div className="card">
          {fetchError && (
            <div className="error-message">
              {fetchError}
            </div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;