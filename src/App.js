import './App.css';
import Collapsible from './components/Collapsible';

function App() {
  return (
    <>
      <Collapsible label='Click Here'>
        <ul>
          <li>Profile</li>
          <li>dashboard</li>
        </ul>
      </Collapsible>
    </>
  );
}

export default App;
