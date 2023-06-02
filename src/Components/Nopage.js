import React from "react";
import { useHistory } from 'react-router-dom'
import Base from "../Base/Base";


function Nopage() {
    const history = useHistory()
    return (
        <Base
            title={"404 no page content"}
            description={"please go to dashboard and click below button"}
        >
            <button onClick={() => history.push("/")}>Go to Dsahboard</button>
        </Base>

    )
}

export default Nopage