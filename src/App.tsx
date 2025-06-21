import React from "react";

// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import ReadView from "./pages/ReadView";

// layouts
import HomeNavLayout from "./layouts/HomeNavLayout";
import ReadNavLayout from "./layouts/ReadNavLayout";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <HomeNavLayout>
              <Homepage />
            </HomeNavLayout>
          }
        />

        <Route
          path="/read"
          element={
            <ReadNavLayout>
              {" "}
              <ReadView />{" "}
            </ReadNavLayout>
          }
        />
        {/* Add more routes here as needed */}
      </Routes>
    </div>
  );
};

export default App;
