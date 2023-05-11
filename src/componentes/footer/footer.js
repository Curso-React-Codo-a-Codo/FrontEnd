import React from "react";
import styles from "@/styles/Footer.module.css";

export default function Footer(props) {
  return <div className={styles.footer}>Pagina del Javi {props.children} </div>;
}
