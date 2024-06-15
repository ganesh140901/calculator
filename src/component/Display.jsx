import styles from "./Display.module.css"
const  Display = ({dis}) => {
  return (
    <input className={styles.mith} 
    type="text" value={dis} readOnly/>
  );
};
export default Display;