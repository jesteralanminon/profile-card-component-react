import "./App.css";
import Form from "./components/profile-card";
function App() {
  return (
    <div className="container-main">
      <div>
        <Form
          name="Victor Crest"
          age={26}
          location="London"
          followers={80000}
          likes={803000}
          photos={1400}
        />
      </div>
    </div>
  );
}

export default App;
