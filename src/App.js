import "./scss/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/pages/Home";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
