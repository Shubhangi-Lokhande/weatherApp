import React from "react";
import ReactDOM from 'react-dom/client';
import MenuSearch from "./components/menuSearch/MenuSearch";
import Accordian from "./components/accordian/Accordian";
import { Provider } from "react-redux";
import store from './redux/store';
import Weather from "./components/WeatherApp/Weather";

const AppLayout = () => (
    <Provider store={store}>
        <div>
            {/* <Accordian/>
             <MenuSearch/>*/}
           <Weather/>
          
        </div>
     </Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);