import NavBar from "../Navbar";
import NewsFetch from "../News";
import './style.css'

export default function NewsDisplay() {

    return (
        <div>
            <NavBar />
            <div>
                <div className="timeAndDate">{new Date().toDateString()}</div>
            <h1>Top Stories</h1>
            </div>
            <div className="displayNews">
                <NewsFetch />
            </div>
        </div>
    )
}