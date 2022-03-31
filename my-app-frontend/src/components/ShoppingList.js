import React, {useState} from 'react';
import ShoppingListCard from './ShoppingListCard';


function ShoppingList({shoppingList, handleAddToShoppingList}){
    const list = shoppingList.map((listObj) => (
        <ShoppingListCard
            key={listObj.id}
            list={listObj}
        />
    ))
    

    const initialListBox = {
        item:'',
    }

    const [listBox, setListBox]=useState(initialListBox)

    const handleListChange = (e) => {
        const {name, value} = e.target;
        console.log(e.target.value)
        setListBox(listBox=>({...listBox, [name]: value}))
    }




    function onAddToMyShoppingList(e){
            e.preventDefault()
            console.log("adding to shopping list", e.target)
            handleAddToShoppingList(listBox)
            setListBox(initialListBox)

            
    
        }


        return(
            <div className='row content d-flex justify-content-center m-2 p-2' >
                <h3>My Shopping List</h3>
            {list}

            
                <div>
                    <form id="comment-form" className="comment-form" onSubmit={onAddToMyShoppingList}> 
                    
                        <input
                            // className="comment-input"
                            type="text"
                            name="item"
                            id="item"
                            placeholder="Add an item"
                            value={listBox.item}
                            onChange={handleListChange}
                        />
                        <button className="comment-button" type="submit">Add</button>
                    </form>
                </div>
        
            </div>
        )
}

export default ShoppingList;