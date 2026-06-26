import React from 'react' //17
import { useSelector } from 'react-redux'
import MovieBox from '../components/MovieBox'

function Home() {
  const data=useSelector(state=>state)
    if(data.loading ){
      return <div className="loading"><h4>loading...</h4></div>
    }
    if(data.error){
    return <div className="error"><h5>error</h5></div>  
  }
  return (
    <div className='home-page'>

      {data.data?.map(movie=><MovieBox movie={movie}/>)}
    </div>
  )
}

export default Home