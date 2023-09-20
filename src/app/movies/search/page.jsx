import React from 'react'
import { getMovies } from '../../../../utils/request';
import Cards from '@/app/components/Cards';
import SearchResults from '@/app/components/SearchResults';

const Search = async ({ searchParams }) => {
    const searchText = searchParams.query;
    console.log(searchText)
    const movies = await getMovies(searchText);
    return (

        <>
            <SearchResults searchText={searchText} movies={movies}/>
        </>
    )
}

export default Search;