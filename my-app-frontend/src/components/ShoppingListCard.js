import React from 'react';

function ShoppingListCard({list}){
    // const {item} = list
    return(
        <div className="card border-light item" style={{ width: '35rem'}}>
            <div className="list-group row content d-flex justify-content-left m-2 p-2">
                     <li>{list.item}</li>
            </div>
        </div>
       
    )
}

export default ShoppingListCard;