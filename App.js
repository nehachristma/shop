import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Component from "./component";
import CategoryPage from "./componentCategory";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from './mensclothing';
import Jewelery from './jewelery';
import Electronics from './electronics';
import Women from './womensclothing';
import ViewCart from './viewCart';

import Navbar from './nav';

function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>


      <BrowserRouter>
        <Routes>
          
          <Route index element={<CategoryPage />} />
          <Route path="/mensclothing" element={<Men />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/viewCart" element={<ViewCart />} />

          <Route path="/electronics" element={<Electronics />} />
         <Route path="/womensclothing" element={<Women />} /> 
          {/* <Route path="/component" element={<Component />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
