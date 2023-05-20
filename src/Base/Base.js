import React from 'react'
import { useHistory } from 'react-router-dom';



const Base = ({title, description, children}) => {
  const history = useHistory()
    return (
      <div className='main-component'>
                      
        <h1 className='heading'>{title}</h1>
             
        <main className='main-segment'>
        <h2>{description}</h2>
        <div className="base-design">
            <div className="left-content">
                               
                <button onClick={()=>history.push("/")}>Dashboard</button>
                <button onClick={()=>history.push("/students")}>Student-list</button>
                <button onClick={()=>history.push("/add")}>Add-students</button>  
                <button onClick={()=>history.push("/login")}>Wrong url</button>
            </div>
            <div className="right-content">
              {children}
            </div>
            </div>
               
        </main>      
         
      </div>
    )
}

export default Base;