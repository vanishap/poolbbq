import React from 'react'

const Details = () => {
  return (
    <div className='input-forms'>
        <form >
            <div className='form'>
                <label>Name:</label>
                <input placeholder='Enter your Name'
                type='text'
                />
            </div>
            <div className='form'>
                <label>Unit:</label>
                <input placeholder='Enter unit number'
                type='number'
                />
            </div>
            <div className='form'>
                <label>Time From:</label>
                <input type='time'/>
            </div>
            <div className='form'>
                <label>Time To:</label>
                <input type='time'/>
            </div>
            <div className='form'>
                <label>Date:</label>
                <input type='date'/>
            </div>
            <div className='form'>
                <button>Book BBQ</button>
            </div>
            <div className='form'>
                <button>Book PoolBBQ</button>
            </div>
        </form>   
    </div>
  )
}

export default Details
