import React from 'react';

function CommentsCard({commentObj}){
    // const {item} = list
    return(
        <div className='row content p-2'style={{ width: '35rem'}}>
            <div className="card border-light">
            <div className="content d-flex">
                     <p>{commentObj.name} commented: "{commentObj.comment}"</p>
                     </div>         
            </div>
        </div>
       
    )
}

export default CommentsCard;