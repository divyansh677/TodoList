import './App.css';
import  FocusInput from "./Hooksjs/FocusInput";
import PreviousCount from './Hooksjs/PreviousCount';
import Counter from './Hooksjs/usecallBack';
import Usememo from './Hooksjs/Usememo';
import InMemoryTodo from './Hooksjs/InmemoryTodo';

function App() {
  return (
    <div className="App">
      {/* <FocusInput/> */}
      {/* <PreviousCount/>
      <Counter/>
      <Usememo/> */}
      <InMemoryTodo/>
    
    </div>
  );
}

export default App;
