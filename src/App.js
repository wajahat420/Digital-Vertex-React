import "./scss/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/pages/Home";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service from "./views/pages/Service";
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
  {
    path: "/service",
    element: <Service />,
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
