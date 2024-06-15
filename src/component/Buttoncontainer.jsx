import styles from "./Buttoncontainer.module.css"
function Buttoncontainer ({onbutton}) {  
    const arr=["1","2","3","4","5","6","7","8","9","+","-","*","/","C","="];
    return (
    <div className={styles.buttonContainer}>
    {arr.map((butt)=>(
    <button className={styles.button} onClick = {() => onbutton(butt)}>{butt}</button>
    ))}
   </div> 
    );
};   
export  default Buttoncontainer;