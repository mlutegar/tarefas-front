import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import VeMetodos from "../components/VeMetodos/VeMetodos";

const Home = () => {
  return (
    <Base>
        <VeMetodos/>
    </Base>
  )
}

export default Home