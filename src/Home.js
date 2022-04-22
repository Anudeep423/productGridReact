import style from "./style.module.css"

export function Home(props){
    return(
        <h2 id = "h2id" > Home Component : {props.greeting} </h2>
    )
}

export function About(){
    return (
        <h2 id = "h2id" > ABout Component </h2>
    )
}

function Main(){
    return(
        <h2 id = "h2-id" > Main Component </h2>
    )
}

export default Main;


