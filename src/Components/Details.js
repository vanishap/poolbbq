import React,{useState} from 'react';

const Details = () => {
    const [data, setData] = useState({name:'', unit:'', date:'',timeFrom:'',timeTo:''});
  


     const submitHandler = (e)=>{
        e.preventDefault();
        setData(data);
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
                required
                type='text'
                value={data.name}
                onChange={(e)=>setData(e.target.value)}
                />
            </div>
            <div className='form'>
                <label>Unit:</label>
                <input required
                placeholder='Enter unit number'
                value={data.unit}
                type='number'
                onChange={(e)=>setData(e.target.value)}
                />
            </div>
            <div className='form'>
                <label>Time From:</label>
                <input required 
                value={data.timeFrom}
                type='time'
                onChange={(e)=>setData(e.target.value)}
                />
            </div>
            <div className='form'>
                <label>Time To:</label>
                <input required
                value={data.timeTo}
                type='time'
                onChange={(e)=>setData(e.target.value)}
                />
            </div>
            <div className='form'>
                <label>Date:</label>
                <input required
                value={data.date}
                type='date'
                onChange={(e)=>setData(e.target.value)}
                />
            </div>
            <div className='form'>
                <button type='submit'>Book Park BBQ</button>
            </div>
            <div className='form'>
                <button type='submit'>Book Pool BBQ</button>
            </div>
        </form>   
        {console.log(data)}
    </div>
  )
}

export default Details
