
import React from 'react'
import { getTrendingMovies } from '../../utils/request';
import Cards from './components/Cards';


const HomePage = async () => {


  const movies = await getTrendingMovies();
  // console.log("m", movies)



  return (
    <div className='container my-3'>
      <h1>Top Trending Movies</h1>

      <div className='d-flex flex-wrap gap-5'>
        {
          movies?.map((movie) => {
            return (
              <>

                <Cards movie={movie} />
              </>
            )
          })
        }
      </div>
    </div>

  )
}

export default HomePage;


// 0cf40740d75cf2762781aef9f841b288  - API Key

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2Y0MDc0MGQ3NWNmMjc2Mjc4MWFlZjlmODQxYjI4OCIsInN1YiI6IjY0ZGU2MTllNWFiODFhMDBjNWI2NWU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YcXBycCr93Qe0-dMi8_AhuXfG0aUwWY20FFjpsovYAg - API Read Access Token
