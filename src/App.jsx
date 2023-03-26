import Navbar from './Navbar'
import Main from './Main'
import Data from './Data'

export default function App() { 

  const cardsData = Data.map (item => {
    return <Main
    key={item.id}
    {...item}
    //item={item}
    />    
  })   

  return (
    <>
    <Navbar /> 
    <section className='cards-list'>
      {cardsData}
    </section>         
    </>
   
  )
}
