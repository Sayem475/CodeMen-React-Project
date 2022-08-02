import MainCard from "./components/mainCard";
import "./styles/variables.css";

function App() {
  return (
    <div className="App">
      {/* Add Responsive container component here. Render the card components inside of that component.  */}
      <div>
        <MainCard />

        {/* Replace me with a responsive container component to hold the group of
        cards! */}
      </div>
    </div>
  );
}

export default App;
