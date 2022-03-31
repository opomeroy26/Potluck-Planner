import React from "react"

function Form({handleChange, handleSubmit, formState}){
    return (
        <div>
            
            <form className='mb-3' onSubmit={handleSubmit}>
                <div className='form-row'>
                <label>Event Name:</label>
                    <input
                        type='text'
                        placeholder='enter a name for your event'
                        name='event_name'
                        value={formState.event_name}
                        onChange={handleChange}
                    ></input>
                </div>
                <div className='form-row'>
                <label>Host:</label>
                    <input
                        type='text'
                        placeholder='who is hosting?'
                        name='host'
                        value={formState.host}
                        onChange={handleChange}
                    ></input>
                </div>
                <div>
                    <label>Details:</label>
                        <input
                            type="text"
                            placeholder="what and where"
                            name='details'
                            value={formState.details}
                            onChange={handleChange}
                        ></input>
                </div>
                <div>
                    <label>Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formState.date}
                            onChange={handleChange}
                        ></input>
                </div>
                <div>
                    <label>Food Suggestions:</label>
                        <input
                            type="string"
                            placeholder="Chips, drinks, etc..."
                            name='food_suggestions'
                            value={formState.food_suggestions}
                            onChange={handleChange}
                        ></input>
                </div>
                <div>
                    <label>Image:</label>
                        <input
                            type="text"
                            id='image'
                            placeholder="Paste image url"
                            name='image'
                            value={formState.image}
                            onChange={handleChange}
                        ></input>
                </div>
                <div>
                    <label>Category:</label>
                    <select
                        id='category'
                        value={formState.category_id}
                        name='category_id'
                        onChange={handleChange}
                    >
                        <option value="NA">Choose a Category</option>
                        <option value="61">Holiday</option>
                        <option value="62">Birthday</option>
                        <option value="63">Celebration</option>
                        <option value="64">Miscellaneous</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-secondary'>Create Event</button>

            </form>
        </div>
    )
}

export default Form;