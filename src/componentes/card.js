export default function Card ( props ){
    return (
        <>
            <span> Personaje: { props.name } </span>
            <img src={ props.img}></img>
        </>
    )
}