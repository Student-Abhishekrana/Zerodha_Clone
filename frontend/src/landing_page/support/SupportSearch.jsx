import React from 'react'

const SupportSearch = () => {
  return (
   <div className="container-fluid p-5" style={{backgroundColor:"rgb(240,240,240)",height:"20rem"}}>
    <div className="container mt-2">
        <div className='p-4  d-flex justify-content-between ' style={{fontFamily:"ui-rounded"}}>
            <h1>Support Portal</h1>
            <button className="bg-primary  px-2 border-0 rounded-2 fw-bold">My tickets</button>
        </div>
        <div>
            
            <input type="search"  placeholder="Eg: How do I open my account, How do i activate F&O..." className="px-5 py-2 w-100 border-0 rounded-2 fs-5" style={{height:"3.6rem",outline:"none"}}/>
        </div>
    </div>
   </div>
  )
}

export default SupportSearch