import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemContainer">
        <Item
          title="Lowest Cost Solar Panels in INDIA"
          desc="Money-Back Guarantee"
          desc-link=""
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          rightBtnTxt="LEARN MORE"
          leftBtnLink=""
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model S"
          desc="Starting at ₹50,67,618"
          desc-link=""
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDFER"
          rightBtnTxt="EXISTING INVENTORY"
          leftBtnLink=""
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="Order online for Touchless Delivery"
          desc-link=""
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="EXISTING INVENTORY"
          leftBtnLink=""
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="Order online for Touchless Delivery"
          desc-link=""
          backgroundImg={Model3}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="EXISTING INVENTORY"
          leftBtnLink=""
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desc="Order online for Touchless Delivery"
          desc-link=""
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="LEARN MORE"
          leftBtnLink=""
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          desc-link=""
          backgroundImg={SolarRoof}
          leftBtnTxt="CUSTOM ORDER"
          rightBtnTxt="LEARN MORE"
          leftBtnLink=""
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          desc=""
          desc-link=""
          backgroundImg={Accessories}
          leftBtnTxt="SHOP NOW"
          rightBtnTxt=""
          leftBtnLink=""
          rightBtnLink=""
        />
      </div>
    </div>
  );
}

export default App;
