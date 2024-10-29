import React from "react"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import img1 from "../src/images/img1.jpg"
import img2 from "../src/images/img2.jpg"
import img3 from "../src/images/img3.JPEG"

export default function App() {
  return (
    <div className="container">
        <Navbar />
        <div className="card-groups">  
          <Card 
            img={img1}
            location="Prague"
            name="Prague Castle"
            travelSpan="2 August, 2024 - 6 August, 2024"
            desc="An ancient symbol of the Czech State, the most significant Czech monument and one of the most important cultural institutions in the Czech Republic."
            realLocation="https://maps.app.goo.gl/yZuPrFjfE8Z1zbkz5"
          />

          <Card
            img={img2}
            location="Prague"
            name="Charles Bridge"
            travelSpan="2 August, 2024 - 6 August, 2024"
            desc="Charles Bridge is a medieval stone arch bridge that crosses the Vltava river in Prague, Czech Republic. Its construction started in 1357 under the auspices of King Charles IV, and finished in the early 15th century. The bridge replaced the old Judith Bridge built 1158 – 1172 that had been badly damaged by a flood in 1342."
            realLocation="https://maps.app.goo.gl/fceu2W6ZH96TCrPo7"
          />
            
          <Card
            img={img3}
            location="Prague"
            name="Astronomical clock"
            travelSpan="2 August, 2024 - 6 August, 2024"
            desc="The Prague astronomical clock or Prague Orloj is a medieval astronomical clock attached to the Old Town Hall in Prague, the capital of the Czech Republic.
            The clock was first installed in 1410, making it the third-oldest astronomical clock in the world and the oldest clock still in operation."
            realLocation="https://maps.app.goo.gl/fceu2W6ZH96TCrPo7"
          />
          
        </div>

    </div>
  )
}


