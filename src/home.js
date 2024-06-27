import React, {useState} from 'react';
import './stile.css';

const Home = () => {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    const fetchBooks = async (query) => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCel3vWaduQ7BS0csG0IGgy4_a2391K9Q0&maxResults=10`
        );
        const json = await response.json();
        setBooks(json.items || []);
    };

    const handleSearch = async (e) => {
        if (search.trim()) {
            await fetchBooks(search);
        }
    };

    return (
        <>
            <div className="container">
                <div className="sopra">
                    <h1>RUMI DISCOVERY</h1>
                    <h3>Qui puoi trovare tutti i libri che vuoi, inizia la tua ricerca!!!</h3>
                </div>

                <hr/>
                <br/>
                <div className="ricerca">
                    <input
                        type="text"
                        className="RicercaTesto"
                        placeholder="Inserisci il nome del libro"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="bottoneRicerca" onClick={handleSearch}>
                        CERCA
                    </button>
                </div>
            </div>

            <div className="risultato">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div key={book.id} className="libroCop">
                            <h4>{book.volumeInfo.title}</h4>
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail}
                                alt={book.volumeInfo.title}
                            />
                            <p>Autore: {book.volumeInfo.authors?.join(', ')}</p>
                            <p>Data pubblicazione: {book.volumeInfo.publishedDate}</p>
                        </div>
                    ))
                ) : (
                    <p>INIZIA LA TUA RICERCA!!!</p>
                )}
            </div>
        </>
    )
        ;
};

export default Home;
