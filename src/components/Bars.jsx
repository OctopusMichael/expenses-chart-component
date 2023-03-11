import React, {useState, useEffect} from "react";
const fecha = new Date();
const currentDay = fecha.toLocaleDateString('en-US', { weekday: 'short' }).toLocaleLowerCase();


const Bars = ({data}) => {
  const [hover, setHover] = useState(data);

  
  const handleHover = (id) =>{
    const updateHover = hover.map ((element) => {
      if (element.id === id){
        return { ...element, active : true }
      } 
      return element;
    })
    setHover(updateHover)
 
  }
  const handleHoverOut = (id) =>{
    const updateHover = hover.map ((element) => {
      if (element.id === id){
        return { ...element, active : false }
      } 
      return element;
    })
    setHover(updateHover)

  }
 


  

  return (
    <>
      <div className="container section-container-bar">
        {hover.map((element) => (
          <div key={element.id} className="section-bar">

            {element.active == true  && <span className="amount-active">${element.amount}</span> }
            <div onMouseOver={() => handleHover(element.id)} onMouseOut={() => handleHoverOut(element.id)}  className={ element.day  ===  currentDay ? `bar active ${element.day}`: `bar ${element.day}`}>
            
            </div>
            <p className=" text-muted mt-2">{element.day}</p>
          </div>

        )
         
        )}
      </div>
    </>
  );
};

export default Bars;
