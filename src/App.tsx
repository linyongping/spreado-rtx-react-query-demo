import { useState } from "react";
import "./App.css";
import { Profile } from "./Profile";
import { User } from "./User";

enum Pages {
  User,
  Profile,
}

function App() {
  const [page, setPage] = useState<Pages>(Pages.User);

  return (
    <div className="App">
      <nav>
        <button
          className={page === Pages.Profile ? "active" : ""}
          onClick={() => setPage(Pages.Profile)}
        >
          Profile
        </button>
        <button
          className={page === Pages.User ? "active" : ""}
          onClick={() => setPage(Pages.User)}
        >
          User
        </button>
      </nav>

      <hr style={{ borderTop: "1px solid" }} />

      <div
        style={{
          display: page === Pages.Profile ? "" : "none",
          color: "green",
        }}
      >
        <Profile />
      </div>

      <div
        style={{ display: page === Pages.User ? "" : "none", color: "blue" }}
      >
        <User />
      </div>
    </div>
  );
}

export default App;
