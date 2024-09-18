import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/login/login"
import Redirect from "./components/redirect/redirect"
import HomePage from "./pages/homepage/HomePage"

const container = document.getElementById("root")
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/redirect",
    element: <Redirect />,
  },
  {
    path: "/authorized",
    element: <Redirect link={ "/" } />
  },
  {
    path: "/",
    element: <HomePage />,
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
