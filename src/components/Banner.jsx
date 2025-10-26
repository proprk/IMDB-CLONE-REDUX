import {useState, useEffect} from 'react';
import axios from 'axios';

const Banner = () => {

    const [bannerImage, setBannerImage] = useState("");
    const [title, setTitle] = useState("");

    useEffect (()=> {
        const fetchBanner = async () => {
            try {
                const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=9050ca1af6fc39b2e920fd40aa019cf7&language=en-US&page=1");

                // console.log(response.data.results[0].backdrop_path);

                const firstMovie = response.data.results[0]
                const firstMovieTitle = firstMovie.title
                const firstMovieBanner = firstMovie.backdrop_path

                setBannerImage(`https://image.tmdb.org/t/p/original${firstMovieBanner}`);
                setTitle(firstMovieTitle);

            } catch (error) {
                console.log(error.message)
            }
        }

        fetchBanner();
        
    }, [])
    return (
            <div className="flex justify-center items-center" style={{ backgroundImage:`url(${bannerImage})`, backgroundSize:"cover", backgroundPosition:"start", height:"60vh"}}
        >
            <h1 className="text-3xl bg-[rgb(0,0,71,0.5)] px-4 py-2 rounded-lg">{title}</h1>
            </div>
    )
}

export default Banner;