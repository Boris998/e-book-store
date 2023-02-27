import classes from './BookItem.module.css'
import {Grid} from "@mui/material";

const BookItem = (props) => {
    return <Grid item xs={12} md={6} >
        <figure className={classes['effect-romeo']}>
            <img src={props.img} alt="cover"/>
            <figcaption>
                <h2>{props.title} <span>{props.title.slice(0,10)}</span></h2>
                <p>{props.publishedDate}</p>
                <a href="#">View more</a>
            </figcaption>
        </figure>
    </Grid>;
}

export default BookItem;




