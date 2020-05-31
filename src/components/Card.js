import React from 'react';
// import Robots from './Robots';
const Card =({id,name,email}) =>{
    return(
        <div className="hover-bg-light-blue bg-gold sans-serif dib br3 pa3 ma2 grow b tc bw3 shadow-5 ">
            <img src={`https://robohash.org/e${id}?size=200x200`} alt="abc"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    )
}
export default Card;