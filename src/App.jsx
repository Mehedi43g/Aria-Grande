
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './layout/Layout'
  let router = createBrowserRouter(createRoutesFromElements(
<Route element={<Layout/>}>
  <Route index element={<Home/>} />
</Route>
  )
)

function App() {
 return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
