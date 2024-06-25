import React, { useEffect, useState } from 'react';
import './styles.css';

const Home = () => {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    const fetchBooks = async (query) => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCel3vWaduQ7BS0csG0IGgy4_a2391K9Q0&maxResults=40`
        );
        const json = await response.json();
        setBooks(json.items || []);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            fetchBooks(search);
        }
    };

    useEffect(() => {
        fetchBooks('all');
    }, []);

    return (
        <div className="Container">
            <div className="Sopra">
                <h1>RUMI DISCOVERY</h1>
                <h3>Qui puoi trovare tutti i libri che vuoi, inizia la tua ricerca!!!</h3>
                <hr />
            </div>

            <div className="Ricerca">
                <input
                    type="text"
                    className="RicercaTesto"
                    placeholder="Inserisci il nome del libro"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="BottoneRicerca" onClick={handleSearch}>
                    CERCA
                </button>
            </div>

            <div className="Risultato">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div key={book.id} className="LibroCop">
                            <h4>{book.volumeInfo.title}</h4>
                            <p>Autore: {book.volumeInfo.authors?.join(', ')}</p>
                            <p>Data pubblicazione: {book.volumeInfo.publishedDate}</p>
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail}
                                alt={book.volumeInfo.title}
                            />
                        </div>
                    ))
                ) : (
                    <p>NESSUN RISULTATO, RIPROVA!!!</p>
                )}
            </div>
        </div>
    );
};

export default Home;
