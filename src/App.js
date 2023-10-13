import { Col, Container, Row } from "react-bootstrap";
import HelloWorld from "./components/01-hello-world/hello-world";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Style1 from "./components/04-style/style1";
import Style2 from "./components/04-style/style2";
import Style3 from "./components/04-style/style3";
import Style4 from "./components/04-style/style4";
import DigitalClock1 from "./components/05-clock1/digital-clock1";
import Greetings from "./components/06-props-1/greetings";
import Welcome from "./components/06-props-1/welcome";
import CardContainer from "./components/07-props-2/card-container";
import Product from "./components/07-props-2/product";
import DigitalClock2 from "./components/08-clock2/digital-clock2";
import Gallery from "./components/09-images/gallery";
import Image from "./components/09-images/image";
import ProfileCard from "./components/10-profile-card/profile-card";
import BootstrapDynamic from "./components/11-bootstrap/bootstrap-dynamic";
import BootstrapStatic from "./components/11-bootstrap/bootstrap-static";
import Events from "./components/13-events/events";
import Icons from "./components/12-icons/icons";
import Shop from "./components/14-products/shop";
import State from "./components/15-use-state/state";
import Stateless from "./components/15-use-state/stateless";
import Counter from "./components/16-counter/counter";
import Birthday from "./components/17-birthday/birthday";
import UseEffect1 from "./components/18-useeffect/use-effect1";
import DigitalClock3 from "./components/19-clock3/digital-clock3";
import UseEffect2 from "./components/18-useeffect/use-effect2";
import FilterCountry from "./components/20-filter-country/filter-country";
import UseRef from "./components/21-useref/useref";
import ClassComp from "./components/22-class-comp/class-comp";
import FetchStudents from "./components/23-fetch-students/fetch-students";
import Countries from "./components/24-axios-countries/countries";
import ParentComp from "./components/25-child-to-parent/parent-comp";
import Form1 from "./components/26-forms/form1";
import Form2 from "./components/26-forms/form2";
import Form3 from "./components/26-forms/form3";
import Form4 from "./components/26-forms/form4";
import Form5 from "./components/26-forms/form5";
import Form6 from "./components/26-forms/form6";
import Exchange from "./components/27-context-api/exchange";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-home/header/header";
import Menu from "./components/00-home/menu/menu";
import StoreContext from "./store";
import { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "./components/27-context-api/topbar";
import Content from "./components/27-context-api/content";



const App =() =>{

  const [counter, setCounter] = useState(10)
  const [currencies, setCurrencies] = useState({})

  const loadData = async()=>{
    try {
      const resp = await axios.get("https://api.frankfurter.app/latest?from=try")
      setCurrencies(resp.data.rates)
      
    } catch (error) {
      console.log(error) 
    }
  }

  useEffect(() =>{
    loadData()
  }, [])

  return (
    <StoreContext.Provider value={{counter, setCounter, currencies}}>
    <BrowserRouter>
    <Header/>
    <Container fluid>
      <Row>
        <Col sm={2}>
          <Menu/>
       </Col>
       <Col sm={10}>
        <Routes>
          <Route path="/hello-world" element={<HelloWorld/>} />
          <Route path="/jsx1" element={<Jsx1/>} />
          <Route path="/jsx2" element={<Jsx2/>} />
          <Route path="/jsx3" element={<Jsx3/>} />
          <Route path="/style1" element={<Style1/>} />
          <Route path="/exchange" element={<Exchange/>} />
          <Route path="/topbar" element={<Topbar/>} />
          <Route path="/content" element={<Content/>} />

        </Routes>
       </Col>
      </Row>

    </Container>
    { /*
      
      <Jsx1/>
      <Jsx2/>
      <Jsx3/>
      <Jsx4/>
      <Jsx5/>
      <Jsx6/>
      <Style1/>
      <Style2/>
      <Style3/>
      <Style4/>
      <DigitalClock1/>
      <Greetings/>
      <CardContainer/>
      <DigitalClock2 bgColor="red" texyColor="yellow"/>
      <Image/>
      <Gallery/>
      <ProfileCard name= "Walker" image="profile.jpg"  location ="Nashville, Tennesse" shot ="242" followers="2423" following = "2342"/>
      <BootstrapStatic/>
      <BootstrapDynamic/>
      <Icons/>
      <Events/>
      <Shop/>
      <Stateless/>
      <State/>
      <Counter/>
      <Birthday/>
      <UseEffect1/>
      <DigitalClock3/>
      <UseEffect2/>
      <FilterCountry/>
      <UseRef/>
      <ClassComp/>
      <FetchStudents/>
      <Countries/>
      <ParentComp/>
      <Form1/>
      <Form2/>
      <Form3/>
      <Form4/>
      <Form5/>
      <Form6/>
      
      
  */}




   
   </BrowserRouter>
   </StoreContext.Provider>

  )
}

export default App;