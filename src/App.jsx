import styles from "./App.module.css";
import Buttoncontainer from "./component/buttoncontainer.jsx";
import Display from "./component/display.jsx";
import {useState} from "react"  
import 
function App() {   
  const [calval, setcalval]=useState("");
  const  onbutton=(buttontext) => {
     if (buttontext==="C")
     {
        setcalval("");
     } 
     else if (buttontext==="=")
     {
       const result=eval(calval);
       setcalval(result);
     }  
     else 
     {
      const newdis=calval+buttontext;
      setcalval(newdis);
     }
  };
  return (
    <div className={styles.calculator}>
      <Display dis={calval}></Display>
      <Buttoncontainer onbutton={onbutton}></Buttoncontainer>
    </div>
  )
}
export default App;
