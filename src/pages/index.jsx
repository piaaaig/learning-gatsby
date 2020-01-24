import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div
    style={{
      color: "pink",
      fontSize: "50px",
      fontWeight: "300",
      display: "flex",
      alignContent: "center",
      flexDirection: "column",
    }}
  >
    <Link to="/contact/">Contact</Link>
    <Header headerText="About Gatsby" />
    <p style={{ fontSize: "30px", textAlign: "center" }}>Piñera Culiao</p>
    <img
      style={{ alignSelf: "center", width: "50%" }}
      src="https://www.theclinic.cl/wp-content/uploads/2019/11/pin%CC%83era-1200x685.jpg"
      alt="Piñera"
    />
  </div>
)
