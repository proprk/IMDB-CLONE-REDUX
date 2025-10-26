import {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import { MdOutlineRemoveCircle } from "react-icons/md";
import {trendyMoviesURL} from '../constants'
import { FiSearch } from "react-icons/fi";
import {WatchListContext} from '../context/WatchListContext';
import Pagination from './Pagination';
import {useSelector, useDispatch} from 'react-redux';
import {handleNext, handlePrev} from '../redux/paginationSlice'

const Movies = () => {
    const [movies, setmovies] = useState([]);
    const [search, setSearch] = useState('');
    const {addToWatchList, removeFromWatchList, doesContain, watchList, setWatchList} = useContext(WatchListContext);
    const currPage = useSelector((state) => state.pagination.value);
    const dispatch = useDispatch();

    
    useEffect ( () => {
        const fetchMovies = async () => {
            try{
                const response = await axios.get(trendyMoviesURL(currPage))
                setmovies(response.data.results)
            } catch (err){
                console.log(err.message)
            }
        }
        fetchMovies()
    },[currPage])

    const searchMovies = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>  
            <div className="flex justify-center items-center relative">
                <input type="text" onChange={searchMovies} className="outline-none h-[60px] w-[640px] pl-12 pr-4 m-4 bg-gray-100/10 text-[#A8B5DB]" placeholder="Search your movie here"/>
                <FiSearch className="left-[calc(50%-320px+20px)] text-[#AB8BFF] absolute "/>
            </div>
            <div className="flex flex-wrap gap-6 justify-evenly items:center mt-4">
                {movies.filter(movieObj => (movieObj.title.toLowerCase().includes(search.toLowerCase())))
                .map((movieObj)=>{
                return (
                    <div className="relative w-[200px] h-[40vh] bg-cover bg-center hover:scale-110 duration-300 rounded-lg flex items-end" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}}>
                        <div className="w-full">
                            {doesContain(movieObj) ?  (<div onClick={()=>removeFromWatchList(movieObj)} className="absolute top-2 right-2 bg-[rgb(0,0,71,0.5)] rounded-sm p-1"><MdOutlineRemoveCircle className="text-white"/></div>) : (<div onClick={()=>addToWatchList(movieObj)} className="absolute top-2 right-2 bg-[rgb(0,0,71,0.5)] rounded-sm p-1"><FaHeart className="text-red-500"/></div>) }
                            <div className="absolute bottom-0 text-white w-full text-center text-xl p-2 rounded-lg bg-[rgb(0,0,71,0.5)]">{movieObj.title}</div>
                        </div>
                    </div>
                )
            })}
            </div>
            <Pagination nextPageFn={()=>dispatch(handleNext())} prevPageFn={()=>dispatch(handlePrev())} pageNum={currPage}/>
        </>
    )
}

export default Movies;