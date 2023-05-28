export default function ComponenteExemplo(props){
    
    return (
        <div>
            <img src={props.image} alt="" width={150}/>
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
        </div>
    )
}