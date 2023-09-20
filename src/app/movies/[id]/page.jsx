import React from 'react'
import { getMoviesDetails, getSimilarMovies } from '../../../../utils/request';
import Image from 'next/image';

const MovieDetail = async ({ params }) => {
  const imgBaseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face"
  const moviesDetails = await getMoviesDetails(params.id);
  // console.log("mk", moviesDetails, params.id)
  const similarMovies = await getSimilarMovies(params.id);
  console.log("mk", similarMovies, params.id)
  return (
    <div className='my-4 mx-3'>
      <div className='d-flex align-items-center'>
        <div className='col-3'>
          {/* <img src={imgBaseUrl + moviesDetails.backdrop_path} alt="" /> */}
          <Image src={imgBaseUrl + moviesDetails.backdrop_path} alt="" width={300} height={300}/>
        </div>
        <div className='mx-5'>
          <h3>{moviesDetails.title}</h3>
          <div className='d-flex'>
            <p className='py-1 px-2 bg-warning text-white me-2 rounded'>{moviesDetails.release_date}</p>
            <p className='py-1 px-2 bg-warning text-white me-2 rounded'>{moviesDetails.original_language}</p>
            <p className='py-1 px-2 bg-warning text-white me-2 rounded'>{moviesDetails.status}</p>
          </div>
          <div className=''>
            <p>
              {
                moviesDetails.genres?.map((genres)=>{
                  return <span className='mx-1 p-1 bg-dark text-white  me-2 rounded' key={genres.id}>{genres.name}</span>
                })
              }
            </p>
          </div>
          <p>
            {moviesDetails.overview}
          </p>
        </div>
      </div>
      {/* Similar Movies */}

      <div className='my-3'>
        <h2>Similar Movies</h2>
        <div className='d-flex flex-wrap gap-3'>
          {
            similarMovies.map((similarMovies)=>{
              return(
                <div key={similarMovies.id}>
                  
                  <Image src={imgBaseUrl+similarMovies.poster_path} alt="" width={300} height={300} />
                  <div className='card-body'>
                    <h5 className='card-title'>
                      {similarMovies.title}
                    </h5>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MovieDetail;