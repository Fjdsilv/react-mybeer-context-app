import { useMyContext } from "../../context/appContext"

const Beers = () => {

  const { beers } = useMyContext(); 
    
  return (
    <div>
        <h1>My Beers</h1>
        <div>
            {beers.map(beer => {
                const { name, tagline, description, brewers_tips, image_url, id } = beer;
                return (
                    <div key={id}>
                        <h3>{name}</h3>
                        <p>{tagline}</p>
                        <p>{description}</p>
                        <p>{brewers_tips}</p>
                        <img src={image_url} alt={name} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}
export default Beers




