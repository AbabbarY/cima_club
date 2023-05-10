import { AiFillStar ,AiOutlinePlayCircle,AiOutlineArrowLeft} from "react-icons/ai";


const Movies_compo = (props) =>{

    return(
        <div  className="carousel_card carousel_card2" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${props.image})`}}>
        <div className="evalué">
            <span><AiFillStar /></span>
            <span>{props.vote.toFixed(1)}</span>
        </div>
        <div className="episode">
                <p> التقييمات</p>
                <p>{props.vote_count}</p>
            </div>
        <div className="play_film">
        <span><AiOutlinePlayCircle /></span>
        <p>   
        فيلم  <br />
            {props.title}
            {props.name}
        </p>
        <p>{props.overview.slice(0,100)}</p>

            </div>
    </div>
    )

}

export default Movies_compo;