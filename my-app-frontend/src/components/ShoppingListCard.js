import React from 'react';

function ShoppingListCard({list, handleShoppingListDelete}){
    // const {item} = list
    return(
        <div className='row content p-2'style={{ width: '35rem'}}>
            <div className="card border-light">
            <div className="content d-flex">
                     <li>{list.item}</li>
                     </div>
                     <div>
                     <button className='btn btn-secondary' id='listbtn' onClick={()=>handleShoppingListDelete(list)}>Remove Item</button>
                     </div>
               
                {/* <button className='btn btn-secondary ' id='btn' onClick={()=>handleShoppingListDelete(list)}>delete</button> */}
                     
            </div>
        </div>
       
    )
}

export default ShoppingListCard;