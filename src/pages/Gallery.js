import React, {useMemo} from "react";
import "../styles/style.scss";
import useGallerys from "../hooks/useGallerys";
import { PuffLoader } from "react-spinners";
import { Link } from "react-router-dom";
function Gallery() {
    
    const getGallerys = useGallerys()

    const gallerys = useMemo(()=> getGallerys.data, [getGallerys.data])

    if(getGallerys.isLoading){
        return (
            <div className="_container catalog__loading">
                <PuffLoader size={'350px'} cssOverride={{'marginTop': '150px'}}/>
            </div>
        )
    }
    return (
        <div className="gallery _container">
            <h1 className="tc mt5">Галерея</h1>
            <ul className="gallery__list">
                {getGallerys.isError 
                ? <h1 className="ml-auto mr-auto mb7">Помилка завантаження галереї</h1>
                : gallerys.map((pr)=>{
                    return (
                    <Link to={"/gallery/" + pr.id} className='gallery__link'>
                        <li key={pr.id} className="gallery__elem">
                            <div className="gallery__name">{pr.name}</div>
                            <img className="gallery__img" src={pr.photo_preview} draggable="false"/>
                        </li>
                    </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Gallery;