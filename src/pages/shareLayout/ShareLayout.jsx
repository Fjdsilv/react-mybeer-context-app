import { Link, Outlet } from "react-router-dom"

const ShareLayout = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Beers</Link>
            </li>
            <li>
                <Link to="addBeers">Add Beers</Link>
            </li>
        </ul>
    </nav>
    
    <Outlet />
    </>
  )
}
export default ShareLayout