import React from "react";
import {useParams} from "react-router-dom";
import { getOneGallery } from "../../api/newsAPI";
import { useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import Slider from "../Slider";
import ErrorPage from "../../pages/ErrorPage";
function GalleryOne() {

    const {id} = useParams()

    const {data, isLoading, isError} = useQuery('getOneGallery', ()=>
        getOneGallery(id)
    )

    if(isError){
        return <ErrorPage title={'Схоже такої галереї не існує'} text={'На головну'}/>
    }

    if(isLoading){
        return(
            <div className="_container catalog__loading">
                <PuffLoader size={'350px'} cssOverride={{'marginTop': '150px'}}/>
            </div>
        )
    }

    return (
        <div className="galleyOne _container">
            <h1 className="tc mt5">Галерея</h1>
            <Slider dataSlider={data.data.photo}/>
        </div>
    );
    
}

export default GalleryOne;
