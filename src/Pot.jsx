import './pot.css'
export default function Pot({pot}){
    const {body, title, id, userId} = pot;
    return(
        <div className="pot">
            <h4>Title: {title} </h4>
            <p> <small>PostId: {id}</small> </p>
            <p><small>Userid: {userId}</small></p>
            <p>Body: {body}</p>
        </div>
    )
}