import React from "react";
import Base from "../Base/Base";
import { useHistory } from 'react-router-dom';




function Dashboard() {
    const history = useHistory()

    return(
        <Base 
        title={"welcome to student list"}
        description={"This is a student list"}
        >
        <button onClick={()=>history.push("/students")}>The Student details</button>
        </Base>
    )
}

export default Dashboard