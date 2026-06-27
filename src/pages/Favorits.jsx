import React from 'react'
import { useSelector } from 'react-redux'
import FavoritesBox from '../components/FavoritesBox'

function Favorits() {
    const data=useSelector(state=>state.favorites)
    if(!data.length){
        return <h4>no favorites movies</h4>
    }
  return (
    <div className='favorites'>
        {
            data.map(movie=><FavoritesBox movie={movie}/>)
        }

    </div>
  )
}

export default Favorits