import classes from "./Books.module.css";
import {useEffect, useState} from "react";
import BookItem from "./BookItem";
import {Box, Grid} from "@mui/material";

const Books = (props) => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const data = props.promiseData;
    console.log(data);

    useEffect(() => {
        const loadedBooks = [];
        const fetchBooks = () => {
            for (const bookKey in data) {
                loadedBooks.push({
                    id: data[bookKey].id,
                    authors: data[bookKey].volumeInfo.authors,
                    publishedDate: data[bookKey].volumeInfo.publishedDate,
                    title: data[bookKey].volumeInfo.title,
                    description: data[bookKey].volumeInfo.description,
                    isbn: data[bookKey].volumeInfo.industryIdentifiers,
                    img: data[bookKey].volumeInfo.imageLinks.thumbnail,
                });
            }
            console.log('ss1', loadedBooks);
            setBooks(loadedBooks);
            setIsLoading(false);
        }

        try {
            fetchBooks();
        } catch (e) {
            console.log('sd');
            setIsLoading(false);
            setHttpError(e.message);
        }
    }, [data]);


    const booksList = books.map(book => <BookItem
        key={book.id}
        id={book.id}
        title={book.title}
        authors={book.authors}
        publishedDate={book.publishedDate}
        img={book.img}
        description={book.description}
    />);


    return <div className={classes.books}>
        <Box>
            <Grid container spacing={1}>
                {booksList}
            </Grid>
        </Box>
    </div>
}

export default Books;