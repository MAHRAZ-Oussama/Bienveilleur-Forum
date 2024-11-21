/*import React from "react";
import PropertiesPage from "./pages/PropertiesPage";
import "./styles/global.css";

function App() {
  return (
    <div className="app-container">
      <PropertiesPage />
    </div>
  );
}

export default App;
*/

import React from "react";
import PropertiesPage from "./pages/PropertiesPage";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <PropertiesPage />
    </div>
  );
};

export default App;
