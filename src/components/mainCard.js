import React,{useState,Fragment}  from 'react'
import Card from './smallerComponents/card'
import {sampleData} from '../data/sampleData' 

export default function MainCard() {
  const [search,setSearch]=useState('');
  const [data,setData]=useState(sampleData);

  const handleSearch=(e)=>{
   if( search!==''){
    var searchData = data.filter((user) => { return (user.name.toUpperCase().match(search.toUpperCase())) })
    searchData.length > 0 &&
    setData(searchData)
  }
  else
    setData(sampleData);
  }

    return (
      <Fragment>
        <div className="container-fluid bg-light mt-4 pb-4">

          <div className="container-fluid ps-0 pb-3">
            <div className="form-inline my-2 my-lg-0 pt-3">
              <input className="form-control mr-sm-2" type="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Search By Name" aria-label="Search"/>
              <a className="btn btn-outline-success my-2 my-sm-0" onClick={(e)=>handleSearch()}>Search</a>
            </div>
          </div>

          <div className="card__container">
             {
              data && data.map((item, key) => (
                    <Card item={item}
                      key={key}/>
                  ))
              } 
          </div>
        </div>
      </Fragment>
            
        
    )
}