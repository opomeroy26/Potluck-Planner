import React from 'react';

function ShoppingListCard({list, handleShoppingListDelete}){
    // const {item} = list
    return(
        <div className="card border-light item" style={{ width: '35rem'}}>
            <div className="d-flex">
                     <li>{list.item}</li>
                     <button onClick={()=>handleShoppingListDelete(list)}>delete</button>
            </div>
        </div>
       
    )
}

export default ShoppingListCard;