import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beers from "./pages/beers/Beers";
import AddBeer from "./pages/addBeer/AddBeer";
import NoPage from "./pages/noPage/NoPage";
import ShareLayout from "./pages/shareLayout/ShareLayout";


function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ShareLayout />}>
                        <Route index element={<Beers />} />
                        <Route path="addBeers" element={<AddBeer />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;