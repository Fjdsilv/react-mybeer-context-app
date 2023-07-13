import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { useMyContext } from "../context/appContext"

const AddForm = () => {
    const [myNewBeer, setMyNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        brewers_tips: "",
    })
    
    const { beers, setBeers } = useMyContext();

    const navigate = useNavigate()

    const handleChange = (e) => {
        setMyNewBeer({ ...myNewBeer, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!myNewBeer.name || !myNewBeer.tagline || !myNewBeer.description || !myNewBeer.brewers_tips) {
            alert("incomplete form");
        }
        else {
            const newBeer = { id: uuidv4(), ...myNewBeer }  
            
            setBeers([...beers, newBeer])

            setMyNewBeer({
                name: "",
                tagline: "",
                description: "",
                brewers_tips: "",
            })
            
            navigate("/")
        }

    }

    // console.log(beers)

    // console.log(addNewBeer)

    // console.log(newBeer)

  return (
    <article>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={myNewBeer.name}
                    onChange={handleChange}
                />
            </div>       
            <div>
                <label htmlFor="tagline">Tagline:</label>
                <input 
                    type="text" 
                    name="tagline" 
                    id="tagline" 
                    value={myNewBeer.tagline}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input 
                    type="text" 
                    name="description" 
                    id="description"
                    value={myNewBeer.description} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="brewers_tips">Brewers Tip:</label>
                <input 
                    type="text" 
                    name="brewers_tips" 
                    id="brewers_tips" 
                    value={myNewBeer.brewers_tips}
                    onChange={handleChange}
                />
            </div>
            <button>
                Add New Beer
            </button>
        </form>
    </article>
  )
}
export default AddForm