
import '../src/css/natour.css';
import LeftSide from './productsList/ProductList';
import ShoppingList from './shoppingList/ShoppingList';
import Popups from './popups/Popups';
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import AddProducts from './addProducts/AddProducts';
function App() {
  const router = createBrowserRouter([
    {
      path:"/addproducts", element:<AddProducts/>
    },
    {
      path:"/", element:<ShoppingList/>
    },
   {
     path:"/prodList", element:<Popups/>
   },
  ])
  return (
    <div style={{display:"flex",width:"100vw",height:"100vh"}} className="App">
     {/* <LeftSide/> */}
     {/* <RightSide/> */}
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
