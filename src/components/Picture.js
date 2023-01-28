import React, {useEffect, useState} from "react";

function Picture () {


    // const URL= "https://api.nasa.gov/planetary/apod"
    // const api_key="hgwxMjtozlHHkS7aJmuiOUabXx0cybEjjoTljO5P"

    const[data, setData]= useState([])

    useEffect (() => {
        fetch ("https://api.nasa.gov/planetary/apod?api_key=hgwxMjtozlHHkS7aJmuiOUabXx0cybEjjoTljO5P")
        .then((response)=> response.json())
        .then((data) => {
            setData(data)
        })
        .then ((data) => console.log(data))
        .then((error)=> console.log(error))    
    

    }, [])
    return (
        <div>
            <div className="card mt-3">
                {data.url ?  <img src= {data.url} className="card-img-top text-light" alt= {data.title} /> : <div> Loading...</div>}
                <div className ="card-body">
                    <h5 className="card-title text-light"> {data.title} </h5>
                    <p className="card-text text-light"> {data.explanation} </p>
                    <small className="text-light"> {data.date} </small>
                    <br/> 
                </div>
            </div>
        </div>
    )
}export default Picture;
