import React,{useState} from 'react';

const Details = () => {
    const [data, setData] = useState({name:'', unit:'', date:'',timeFrom:'',timeTo:''});
  


     const submitHandler = (e)=>{
        e.preventDefault();
     }

  return (  
    <div className='input-forms'>
        <div className='form'>
            <select >
                <option>
                    Select
                </option>
                <option>
                    Pool BBQ
                </option>
                <option>
                    Park BBQ
                </option>
            </select> 
       </div>
        <form  onSubmit={()=>submitHandler()}>
            <div className='form'>
                <label>Name:</label>
                <input placeholder='Enter your Name'
                type='text'
                value={data.name}
                onChange={(e)=>setData(e.target.value)}
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
                <input 
                type='date'/>
            </div>
            <div className='form'>
                <button type='submit'>Book Park BBQ</button>
            </div>
            <div className='form'>
                <button type='submit'>Book Pool BBQ</button>
            </div>
        </form>   
    </div>
  )
}

export default Details
