import React from 'react'// este lo hace nextjs automatico
export default function Card (props) {
  return (
        <>
            <span> Personaje: { props.name } </span>
            <img src={ props.img}></img>
        </>
  )
}
