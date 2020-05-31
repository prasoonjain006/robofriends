import React from 'react';
import Card from './Card';


const CardList =({ Robots}) =>{
        
    return(
        <div>
            {
            Robots.map((_user,i)=>{
                return(
                    <Card 
                        key={Robots[i].id} 
                        id={Robots[i].id} 
                        name={Robots[i].name} 
                        email={Robots[i].email} />
                    ) 
                })
            }
        </div>
    );
}


export default CardList;