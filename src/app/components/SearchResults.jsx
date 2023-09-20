"use client"
import React from 'react'
import Cards from './Cards'
import { useState } from 'react'
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form';

const SearchResults = ({ searchText, movies }) => {
    const [filterMovies, setFilterMovies] = useState(movies);

    useEffect(() => {
        setFilterMovies(movies)
    }, [movies])

    const filterFilms = (filter) => {
        let sortedFilms = [];
        switch (filter) {
            case "release_date":
                sortedFilms = [...movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
                break;
            case "popularity":
                sortedFilms = [...movies].sort((a, b) => b.popularity - a.popularity)
                break;
            case "vote_average":
                sortedFilms = [...movies].sort((a, b) => b.vote_average - a.vote_average)
                break;

            default:
                break;
                
        }
        setFilterMovies(sortedFilms);
    }

    return (
        <div className='container my-3'>
            <div className='d-flex justify-content-between my-3 mx-3'>
                <h1>Top Search Results for &quot;{searchText}&quot;.</h1>
                <div className='col-2'>
                    <Form.Select aria-label="Default select example" onChange={(e) => filterFilms(e.target.value)}>
                        <option>Short By</option>
                        <option value="release_date">Release Year</option>
                        <option value="popularity">Popularity</option>
                        <option value="vote_average">Ratings</option>
                    </Form.Select>
                </div>
            </div>

            <div className='d-flex flex-wrap gap-5'>
                {
                    filterMovies?.map((movie) => {
                        return (
                            <>

                                <Cards key={movie.id} movie={movie} />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchResults