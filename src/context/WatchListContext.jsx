import {createContext} from 'react'
import {useState, useEffect} from 'react';

const WatchListContext = createContext();

const WatchListContextWrapper = ({children}) => {

    const [watchList, setWatchList] = useState([]);

    const addToWatchList = (movieObj) => {
            const updatedWatchList = [...watchList, movieObj];
            setWatchList(updatedWatchList);
            localStorage.setItem("movies", JSON.stringify(updatedWatchList))
        }
    
        const removeFromWatchList = (movieObj) => {
            const filteredWatchList = watchList.filter((movie)=> movie.id !== movieObj.id)
            setWatchList(filteredWatchList);
            localStorage.setItem("movies", JSON.stringify(filteredWatchList))
        }
    
        useEffect(()=>{
            const watchListFromLocalStorage = JSON.parse(localStorage.getItem('movies'))
            if(watchListFromLocalStorage){
                setWatchList(watchListFromLocalStorage);
            }
        },[])

        const doesContain = (movieObj) => {
        for (let i=0; i<watchList.length; i++){
            if(watchList[i].id === movieObj.id ){
                return true;
            }
        }
        return false;
    };

    return (
        <WatchListContext.Provider value={{addToWatchList, removeFromWatchList, doesContain, watchList, setWatchList}}>
            {children}
        </WatchListContext.Provider>
    )
}

export default WatchListContextWrapper;

export {WatchListContext};