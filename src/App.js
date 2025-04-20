import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart.js";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./Utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore.js";
// since provider is bridge between react and redux and providing it to a react app, so it comes from react-redux

// Chunking
// Lazy loading
// Code splitting
// Dynamic import
// on Demand loading
// Dynamic Bundling
// All the above terms are same
const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userInfo = {
      loggedInUser: "Srivatsan R",
    };
    setUserName(userInfo.loggedInUser);
  }, []);

  return (
    <Provider store={appStore}>   
      <UserContext.Provider value={{ loggedInUser: userName }}>
       
          <div className="app">
            <Header />
            <Outlet />
          </div>
        
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/cart",
        element: <Cart></Cart>
      },
      {
        path: "restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
