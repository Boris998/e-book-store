import {useState} from "react";
import InputContext from "./input-context";


const InputProvider = (props) => {
    const [search, setSearch] = useState('react');

    return <InputContext.Provider value={{search, setSearch}}>
        {props.children}
    </InputContext.Provider>
}

export default InputProvider;