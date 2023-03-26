import location from '/assets/location.png'
export default function Main(card) { 
  
      return (
        <>        
        <div className='card'>
          <img className='card-img' src={card.image} alt="card image" />
          <div className='card-info'>
            <div className='card-location'>
              <div className='card-country'>
                <img src={location} alt="location logo" />
                <p>{card.country}</p>  
              </div>
              <a href={card.location} target="_blank">View on Google Maps</a>
            </div>
            <h2>{card.title}</h2>
              <span>{card.date.from} </span>
              <span>-</span>
              <span> {card.date.to}</span>              
              <p className='card-descr'>{card.description}</p>                  
          </div>      
        </div>               
        </>
      )
        
}
