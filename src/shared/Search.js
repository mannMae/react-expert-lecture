import React from "react";
import _ from "lodash";

const Search = () =>{
    
    const [text, setText] = React.useState("");

    const debounce = _.debounce((value) => {
        console.log(value.target.value);
    }, 1000);
    const throttle = _.throttle((value) =>{
        console.log(value.target.value)
    }, 1000)

    const keyPress = React.useCallback(debounce, []);

    const onChange=(e) =>{
        setText(e.target.value)
        keyPress(e);
    }

    return(
        <div>
            <input type="text" onChange={onChange}/>
            <input type="text" onChange={debounce}/>
            <input type="text" onChange={throttle}/>
        </div>
    )
}

export default Search;