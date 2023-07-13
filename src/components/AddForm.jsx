import { useState } from "react"

const AddForm = () => {
    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        brewers_tips: "",
    })

    const handleChange = (e) => {


        setNewBeer({...newBeer,  })
    }

  return (
    <article>
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={newBeer.name}
                    onChange={handleChange}
                />
            </div>       
            <div>
                <label htmlFor="tagline">Tagline:</label>
                <input 
                    type="text" 
                    name="tagline" 
                    id="tagline" 
                    value={newBeer.tagline}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input 
                    type="text" 
                    name="description" 
                    id="description"
                    value={newBeer.description} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="brewers_tips">Brewers Tip:</label>
                <input 
                    type="text" 
                    name="brewers_tips" 
                    id="brewers_tips" 
                    value={newBeer.brewers_tips}
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