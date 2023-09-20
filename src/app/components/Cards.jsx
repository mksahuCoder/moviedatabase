import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Cards = ({ movie }) => {
  const imgBaseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face"
  return (
    <div>
      <Link className='text-decoration-none' href={"/movies/" + movie.id}>
        <div className='card' style={{width:"15rem"}}>
          {/* <img src={imgBaseUrl + movie.poster_path} alt="g" className='card-img-top'/> */}
          <Image src={imgBaseUrl + movie.poster_path} alt="g" className='card-img-top' width={300} height={300}/>
          <div className='card-body'>
            <h5 className='card-title'>{movie.title}</h5>
            <p className='card-text overflow-y-auto' style={{height: "150px"}}>{movie.overview}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Cards;