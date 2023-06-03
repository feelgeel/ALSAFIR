import "../src/css/natour.css";
import LeftSide from "./productsList/ProductList";
import ShoppingList from "./shoppingList/ShoppingList";
import Popups from "./popups/Popups";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProducts from "./addProducts/AddProducts";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStre";
import { useSelector, useDispatch } from "react-redux";
const theStore = configureStore();
function App() {
  // const addgting=useSelector(state=>state)
  // console.log(addgting);
  const router = createBrowserRouter([
    {
      path: "/addproducts",
      element: <AddProducts />,
    },
    {
      path: "/",
      element: <ShoppingList />,
    },
    {
      path: "/prodList",
      element: <Popups />,
    },
  ]);
  return (
    <Provider store={theStore}>
      <div className="global">
        <div className="nav">
          <button className="sales">sales</button>
          <button className="db_manager">db manager</button>
        </div>
        <div
          style={{ display: "flex", width: "100vw", height: "100vh" }}
          className="App"
        >
          <RouterProvider router={router} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
