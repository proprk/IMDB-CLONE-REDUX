import {useState, useEffect, useContext} from 'react';
import {genreids} from '../constants/index'
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import {WatchListContext} from '../context/WatchListContext'

const WatchList = () => {

    const [search, setSearch] = useState('');
    const [genreList, setGenreList] = useState(["All Genre", "Thriller", "Romance"]);
    const [currentGenre, setCurrentGenre] = useState("All Genre");
    const {watchList} = useContext(WatchListContext);


    useEffect (()=>{
        let temp = watchList.map(movie=>(
            genreids[movie.genre_ids[0]]
        ))
        temp = new Set(temp)
        setGenreList(["All Genre",...temp])
    }, [watchList]);

    const handleFilter = (genre) => {
        setCurrentGenre(genre);
    }

    const genre = (genre_ids) => {
        return genreids[genre_ids];
    }

    const sortRatingAscending = () => {
        const AscendingOrder = watchList.sort((movieObjA, movieObjB) => {
            return movieObjA.vote_average - movieObjB.vote_average
        })
        setWatchList([...AscendingOrder])
    }

    const sortRatingDescending = () => {
        const descendingOrder = watchList.sort((movieObjA, movieObjB)=> {
            return movieObjB.vote_average - movieObjA.vote_average
        })
        setWatchList([...descendingOrder])
    }

    

    const searchWathListMovies = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>  
            <div className="flex justify-center m-4 gap-2">
                {genreList.map((genre) => {
                    const isActive = currentGenre === genre;
                    const baseStyles = "flex justify-center items-center h-[3rem] w-[8rem] rounded-lg text-white font-bold hover:cursor:pointer";
                    const bgColor = isActive ? "bg-[#AB8BFF]" : "bg-gray-400/50";
                    return <div onClick={()=>{handleFilter(genre)}} className={`${baseStyles} ${bgColor}`}>{genre}</div>
                })}
            </div>

            <div className="flex justify-center">
                <input onChange={searchWathListMovies} type="text" className="h-10 w-40 outline-none border rounded-lg px-2" placeholder="Search" />
            </div>

            <div className="overflow-hidden rounded-lg border-gray-200 shadow-md m-5 ">
                <table className="w-full border-collapse bg-white text-black text-left text-sm text-gray-900">
                    <thead className="">
                        <tr className="bg-gray-50">
                            <th className="pl-6 py-4">Poster</th>
                            <th className="pl-6 py-4">Movie Title</th>
                            <th className="pl-6 py-4 flex justify-center items-center gap-1"> 
                                <TiArrowSortedUp onClick={sortRatingAscending} className="cursor-pointer"/> 
                                <div className="">Rating</div> 
                                <TiArrowSortedDown onClick={sortRatingDescending} className="cursor-pointer"/></th>
                            <th className="pl-6 py-4">Popularity</th>
                            <th className="pl-6 py-4">Genre</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {watchList.filter(movie => {
                            if(currentGenre === "All Genre"){
                                return true;
                            } else {
                                return genreids[movie.genre_ids[0]] === currentGenre;
                            }
                        })
                        .filter(movie =>(movie.title.toLowerCase().includes(search.toLowerCase())))
                        .map((movie)=>(
                            <tr className="hover:bg-gray-200 duration-300" key={movie.id}>
                                <td className="flex items-center pl-6 py-4"> <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className="h-20 w-40 object-cover rounded-sm" /> </td>
                                <td className="pl-6 py-4">{movie.title}</td>
                                <td className="pl-6 py-4"> {movie.vote_average} </td>
                                <td className="pl-6 py-4">{movie.popularity}</td>
                                <td className="pl-6 py-4">{genre(movie.genre_ids[0])}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WatchList;