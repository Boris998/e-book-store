import classes from "./Header.module.css";
import SearchInput from "./SearchInput";

const Header = (props) => {
    return <div className={classes.header}>
        <div>
             <nav>

             </nav>
        </div>
        {/*fix with topography*/}
        <SearchInput onChange={props.onChange}/>
    </div>;
}

export default Header;