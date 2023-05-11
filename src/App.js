
import './styles/style.scss'
import Header from "./components/Header/Header";
import Find from "./components/Main/Find/Find";
import How from "./components/Main/how/How";
import Best from "./components/Main/Best/Best";
import House from "./components/Main/House/House";
import Location from "./components/Main/Location/Location";
import Costumers from "./components/Main/Costumers/Costumers";
import Latest from "./components/Main/Latest/Latest";
import Realco from "./components/Main/Realco/Realco";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">


        <Header/>

        <main>
          <Find/>
          <How/>
          <Best/>
          <House/>
          <Location/>
          <Costumers/>
          <Latest/>
          <Realco/>
      </main>

        <Footer/>



    </div>
  );
}

export default App;
