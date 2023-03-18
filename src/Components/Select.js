import Context from "./Context";
import { useContext } from "react";

const Select = ()=>{
 const {selection} = useContext(Context);

    return (<>
            <label style={{fontWeight:'bold'}}>Select BBQ:</label>
            <select >
                <option>Select</option>
                <option>{selection.bbq1}</option>
                <option>{selection.bbq2}</option>
            </select> 
        </>
    )
}
export default Select;