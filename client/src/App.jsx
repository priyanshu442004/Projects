import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Inbox from "./components/inbox";
import Body from "./components/Body";
import Mail from "./components/Mail";
import NotFoundPage from "./components/NotFoundPage";
import SendMail from "./components/SendMail";
import Login from "./components/login";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "mail/:id",
        element: <Mail />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen">
      <RouterProvider router={routing} />
      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendMail />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
