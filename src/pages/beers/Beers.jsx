import { useState } from "react";
import { useMyContext } from "../../context/appContext"

const Beers = () => {
    const [query, setQuery] = useState("")

    const { beers } = useMyContext(); 
    // console.log(beers)

    console.log(beers.filter(beer => beer.name))
  return (
    <div>
        <h1>My Beers</h1>
        <input 
            type="text" 
            name="search" 
            id="" 
            placeholder="search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <div>
            {beers
                .filter(beer => beer.name.toLowerCase().includes(query))
                .map(beer => {
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




