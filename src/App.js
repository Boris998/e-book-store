import './App.css';
import Header from "./components/Header";
import Books from "./components/Books";
import {useEffect, useState} from "react";
import axios from "axios";


const App = () => {
    const [search, setSearch] = useState('REACT');
    const [promiseData, setData] = useState([]);
    // const [sendReq, setSendReq]= useState(false);

    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDex9V8-ulelW2Gvdiy0_n2bUx5jbs4CPo`;

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

/*    const sendReqHandler = () => axios.get(url)
        .then(res => res.data.items.map((key, value) => {
            return value;
        })).catch((err) => console.error(err));*/

    useEffect(() => {
            axios
                .get(url)
                .then(res => setData(res.data.items));
    }, [url]);


    return (
        <div className="App">
            <Header onChange={searchHandler}/>
            <br/>
            <Books searchValue={search} promiseData={promiseData}/>
        </div>
    );
}

export default App;
