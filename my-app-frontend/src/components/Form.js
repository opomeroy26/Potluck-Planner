import React from "react"
import '../App.css'

function Form({handleChange, handleSubmit, formState}){
    return (
        // <div id='newItemForm'>
            
        //     <form id="form" className='border border-border secondary rounded p-2 m-3' onSubmit={handleSubmit}>
        //         <div className='form-row'>
        //             <div className='form-group'>
        //                 <label htmlFor='image' className='label'>Event Name:</label>
        //                     <input
        //                         type='text'
        //                         placeholder='enter a name for your event'
        //                         name='event_name'
        //                         value={formState.event_name}
        //                         onChange={handleChange}
        //                     ></input>
        //             </div>
        //         </div>
        //         <div className='form-row'>
        //         <label>Host:</label>
                    // <input
                    //     type='text'
                    //     placeholder='who is hosting?'
                    //     name='host'
                    //     value={formState.host}
                    //     onChange={handleChange}
                    // ></input>
        //         </div>
        //         <div>
        //             <label>Details:</label>
        //                 <input
        //                     type="text"
        //                     placeholder="what and where"
        //                     name='details'
        //                     value={formState.details}
        //                     onChange={handleChange}
        //                 ></input>
        //         </div>
        //         <div>
        //             <label>Date:</label>
        //                 <input
        //                     type="date"
        //                     name="date"
        //                     value={formState.date}
        //                     onChange={handleChange}
        //                 ></input>
        //         </div>
        //         <div>
        //             <label>Food Suggestions:</label>
        //                 <input
        //                     type="string"
        //                     placeholder="Chips, drinks, etc..."
        //                     name='food_suggestions'
        //                     value={formState.food_suggestions}
        //                     onChange={handleChange}
        //                 ></input>
        //         </div>
        //         <div>
        //             <label>Image:</label>
        //                 <input
        //                     type="text"
        //                     id='image'
        //                     placeholder="Paste image url"
        //                     name='image'
        //                     value={formState.image}
        //                     onChange={handleChange}
        //                 ></input>
        //         </div>
        //         <div>
        //             <label>Category:</label>
        //             <select
        //                 id='category'
        //                 value={formState.category_id}
        //                 name='category_id'
        //                 onChange={handleChange}
        //             >
        //                 <option value="NA">Choose a Category</option>
        //                 <option value="61">Holiday</option>
        //                 <option value="62">Birthday</option>
        //                 <option value="63">Celebration</option>
        //                 <option value="64">Miscellaneous</option>
        //             </select>
        //         </div>
        //         <button type='submit' className='btn btn-secondary'>Create Event</button>

        //     </form>
        // </div>
        <div  className='row content d-flex justify-content-center m-2 p-2'style={{ width: '35rem'}} id="form">
                        <form id='form' className='rounded p-2 m-2' onSubmit={handleSubmit}>
                            <div className='form-row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <label className='label'>Event Name</label>
                                            <input 
                                                type='text'
                                                className='form-control'
                                                placeholder='Enter a name for your event'
                                                name='event_name'
                                                value={formState.event_name}
                                                onChange={handleChange}
                                            >
                                        </input>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='form-row'>   
                                <div className='col no-gutters'> 
                                    <div className='form-group'>
                                        <label className='label'>Host</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder="Enter name of host"
                                            name='host'
                                            value={formState.host}
                                            onChange={handleChange}
                                        ></input>
                                    </div>  
                                </div>
                            </div>
                            <div className='form-row'>    
                                <div className='col no-gutters'>
                                    <div className='form-group'>
                                        <label className='label'>Details</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder="Location, time, etc..."
                                            name='details'
                                            value={formState.details}
                                            onChange={handleChange}
                                        ></input>
                                    </div>
                                </div>
                                <div className='form-row'>    
                                <div className='col no-gutters'>
                                    <div className='form-group'>
                                        <label className='label'>Food Suggestions</label>
                                        <input
                                            type="string"
                                            className='form-control'
                                            placeholder="Chips, drinks, etc..."
                                            name='food_suggestions'
                                            value={formState.food_suggestions}
                                            onChange={handleChange}
                                        ></input>
                                    </div>
                                </div>
                                    
                            </div>
                            
                            <div className='form-row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <label  className='label'>Image Url</label>
                                        <input
                                            type="text"
                                            id='image'
                                            className='form-control'
                                            placeholder="Paste image url"
                                            name='image'
                                            value={formState.image}
                                            onChange={handleChange}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <label className='label'>Event Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            className="form-control"
                                            value={formState.date}
                                            onChange={handleChange}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col'>
                                    <div className='form-group'>
                                        <label className='label'>Event Date</label>
                                        <select
                                            id='category'
                                            className='form-control'
                                            value={formState.category_id}
                                            name='category_id'
                                            onChange={handleChange}>
                                            <option value="NA">Choose a Category</option>
                                            <option value="93">Holiday</option>
                                            <option value="94">Birthday</option>
                                            <option value="95">Celebration</option>
                                            <option value="96">Miscellaneous</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                            <button type='submit' className='btn btn-secondary' id='btn'>Add Listing</button>
                        </form>
                    </div>
    )
}

export default Form;