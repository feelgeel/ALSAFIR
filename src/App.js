import "../src/css/natour.css";
import LeftSide from "./productsList/ProductList";
import ShoppingList from "./shoppingList/ShoppingList";
import Popups from "./popups/Popups";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProducts from "./addProducts/AddProducts";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStre";
import { useSelector, useDispatch } from "react-redux";
import AddToDb from "./manageDb/AddToDb";
import ManageDb from "./manageDb/ManageDb";
import UpdateDb from "./manageDb/UpdateDb";
import DeleteDB from "./manageDb/DeleteDB";
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
    // {
    //   path: "/manageDb",
    //   element: <ManageDb/>,
    // },
    {
      path: "/manageDb/add",
      element: <AddToDb/>,
    },
    {
      path: "/manageDb/update",
      element: <UpdateDb/>,
    },
    {
      path: "/manageDb/delete",
      element: <DeleteDB/>,
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
          <button  className="sales"><a href="/">sales</a></button>
          <button className="db_manager"><a href="/manageDb/add">db manager</a></button>
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
