import React,{useState, useContext} from 'react';
import Select from './Select';
import Context from './Context';
import Login from './Login';

const Form = () => {
    const [data, setData] = useState({name:'', unit:'', date:'',timeFrom:'',timeTo:''});
    const {selection} = useContext(Context)


     const changeHandler = (e)=>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]:value});
     }

  return (  <>
    <div><Login /></div>
    <div className='select-option'>  
        <Select />
    </div>
    <div className='input-forms'>
        <form >
            <div className='form'>
                <label>Name:</label>
                <input placeholder='Enter your Name'
                required
                type='text'
                name='name'
                value={data.name}
                onChange={changeHandler}
                />
            </div>
            <div className='form'>
                <label>Unit:</label>
                <input required
                placeholder='Enter unit number'
                name='unit'
                value={data.unit}
                type='number'
                onChange={changeHandler}
                />
            </div>
            <div className='form'>
                <label>Time From:</label>
                <input required 
                value={data.timeFrom}
                name='timeFrom'
                type='time'
                onChange={changeHandler}
                />
            </div>
            <div className='form'>
                <label>Time To:</label>
                <input required
                value={data.timeTo}
                name='timeTo'
                type='time'
                onChange={changeHandler}
                />
            </div>
            <div className='form'>
                <label>Date:</label>
                <input required
                value={data.date}
                name='date'
                type='date'
                onChange={changeHandler}
                />
            </div>
            <div className='form'>
                    <button type='submit'>{(Select === selection.bbq1)?selection.bbq1 :selection.bbq2} </button>
            </div>
            
        </form>   
        
    </div>
    </>
  )
}

export default Form;
