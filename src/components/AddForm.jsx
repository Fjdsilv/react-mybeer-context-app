import { useState } from "react"

const AddForm = () => {
    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        brewers_tips: "",
    })
    const [addNewBeer, setAddNewBeer] = useState([])
    

    const handleChange = (e) => {
        setNewBeer({ ...newBeer, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newBeer.name || !newBeer.tagline || !newBeer.description || !newBeer.brewers_tips) {
            alert("incomplete form");
        }
        else {
            setAddNewBeer([...addNewBeer, newBeer])

            setNewBeer({
                name: "",
                tagline: "",
                description: "",
                brewers_tips: "",
            })
        }

    }

    console.log(addNewBeer)

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