import { useContext, useState } from "react";
import { mainContext } from "@/context/maincontext";
import styles from "@/styles/Home.module.css";

export default function Darkmode() {
  const { darkMode } = useContext(mainContext);
  const [isToggleOn, setisToggleOn] = useState(darkMode);

  const changeOnOff = () => {
    setisToggleOn(!isToggleOn);
  };
  return (
    <>
      <button onClick={() => changeOnOff()}>
        {isToggleOn ? "Encendido" : "Apagado"}
      </button>
      <span className={isToggleOn ? styles.light : styles.dark}>Elrisas</span>
    </>
  );
}
