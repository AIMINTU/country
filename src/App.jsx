import { useEffect, useState } from 'react'

import './App.css'
import Counrty from './Components/Counrty'
function App() {
  const [countries, setCountries] = useState([])
  const [singleCountry, setSingleCountry]=useState([])
  const [showImg,setShowImg]=useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  function handleDetail(count){
    const next=[...singleCountry,count]
    setSingleCountry(next)
  

  }
  function images(img){
    const next=[...showImg,img]
    setShowImg(next)
  }

  return (
    <div>
      <div>
        {
          singleCountry.map(single=><h3>{single.name.common}</h3>)
        }
      </div>
      <div>
        {
          showImg.map(show=>{
            <img height={'100px'} width={'100px'}src={show.flags.png}></img>
          })
        }
      </div>
      <h1>{ singleCountry.length}</h1>
      <h1> we are going to give world tour today</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'30px'}}>
        {
          countries.map(country=><Counrty imaeges={images}mamu={country} handleClick={handleDetail}></Counrty>)
        }
      </div>
    </div>
  )
}

export default App
