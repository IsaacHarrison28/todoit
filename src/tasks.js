export const Task = (props) => {
    return (
        <div className='display_task_container' style={{borderColor: props.complete === true ? "green" : "rgba(0, 0, 0, 0.4)", background: props.complete === true ? "whitesmoke" : "white"}}>
            <p style={{textDecoration: props.complete === true ? "line-through" : "none"}}>{props.taskName}</p>
            <div className="icons">
                <div className="delete_icon" onClick={() => props.deleteTask(props.id)}>
                    <img src={require('./images/trash-can.png')} alt=""/>
                </div>
                <div className='complete_check_icon' onClick={() => props.completeTask(props.id)}>
                {props.complete ===  false && <img src={require('./images/check.png')} alt=""/>}
                </div>
                {/* <button onClick={() => props.completeTask(props.id)}>complete</button> */}
                {/* <button onClick={() => props.deleteTask(props.id)}>x</button> */}
            </div>
        </div>
    )
}