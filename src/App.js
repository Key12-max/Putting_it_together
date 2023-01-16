import PersonalCard from './components/PersonalCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonalCard
            firstName ={"Doe"}
            lastName = {"Jane"}
            age = {4}
            color = {"Black"}
      />
      <PersonalCard
            firstName ={"Smith"}
            lastName = {"John"}
            age = {48}
            color = {"Brown"}
      />
    </div>
  );
}

export default App;
