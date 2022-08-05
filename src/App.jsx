import { useState, useEffect } from "react"
import axios from "axios";
import { colRef } from './firebase_config'
import { getDocs } from "firebase/firestore";
import SignIn from "./Components/Signin";
import Form from "./Components/Form";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
function App() {

  // const [docs, setDocs] = useState([]);

  // useEffect(() => {

  //   getDocs(colRef)
  //     .then((data) => {
  //       setDocs(data.docs.map((doc) => ({ ...doc.data() })))
  //     })
  //     .catch((err) => {
  //       console.log('Errrror !!!! : ', err);
  //     })
  // }, [])

  // console.log(docs[0].details[0].title);
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/user/:name" element={<Form />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
