import React, {useState, useEffect} from 'react';
import MovieItem from './MovieItem';
import axios from 'axios';

const MovieList = () => {

        const [items, setitems] = useState([]);
        console.log(process.env);

    useEffect(() => {
        const key = (process.env.REACT_APP_KEY);
        const baseURL = 'https://api.themoviedb.org/3/trending/all/day?api_key=';

        const getmoviedata = async() => {
            const res= await axios.get(`${baseURL}${key}`);
        setitems(res.data.results);
        };

        getmoviedata(); 
        
    }, []);

    

    return (
        <div>
            <div className="container">
                <div className="row">
                    {items.map((item) => (
                    
                    <MovieItem key={item.id} item={item} />
                    
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default MovieList
