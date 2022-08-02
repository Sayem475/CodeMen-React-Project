import React from 'react'

export default function ButtonGroup() {
  return (
    <div className='d-flex'>
        <a to="#" className="btn btn-sm btn-outline-blue mt-3 w-100" style={{borderRadius:"29px", width: "85px", borderColor:"blue"}}>View</a>
       <a to="#" className="btn btn-sm btn-outline-danger mt-3 w-100 ms-1" style={{borderRadius:"29px", width: "85px"}}>Remove</a>
      
    </div>
  )
}
