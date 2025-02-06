function User(props){
    return(
        <div>
        <span>{props.data.name}</span>
        <span>{props.data.email}</span>
        <button> HELLO {props.data.address}</button>

        </div>
    )
}

export default User;