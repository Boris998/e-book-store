import classes from './SearchInput.module.css'

const SearchInput = (props) => {

    return <div className={classes.textField}>
        <input type="text" onChange={props.onChange}/>
        <button onClick={props.onClick}>Fetch Books</button>
    </div>

}

export default SearchInput;