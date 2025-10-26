import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex items-center gap-2 h-20 m-auto px-8 justify-between">
            <Link to="/">
                <img className="max-w-[100px]" src="/images/logo.webp" alt="" />
            </Link>
            <div className="flex gap-4 font-bold">
                <Link to="/watchlist">Watchlist</Link>
                <Link to="/movies">Movies</Link>
            </div>
        </div>
    )
}

export default Navbar;