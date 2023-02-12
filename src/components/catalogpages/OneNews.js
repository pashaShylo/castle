import React from "react";
import {useParams} from "react-router-dom";
import { getOne } from "../../api/newsAPI";
import { useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import ErrorPage from "../../pages/ErrorPage";

function OneNews() {

    const {id} = useParams()

    const {data, isLoading, isError} = useQuery('getOneNews', ()=>
        getOne(id)
    )

    if(isError){
        return <ErrorPage title={'Схоже такої новини не існує'} text={'На головну'}/>
    }

    if(isLoading){
        return(
            <div className="_container catalog__loading">
                <PuffLoader size={'350px'} cssOverride={{'marginTop': '150px'}}/>
            </div>
        )
    }

    return (
        <div className="news _container">
            <h1 className="tc">{data.data.title}</h1>
            {data.data.content.map((elem, index)=>{
                if(index % 2 === 0){
                    return <div className="news__block">
                    <img src={elem.photo} className='news__image'/>
                    <p className="news__text">{elem.text}</p>
                </div>
                }
                return <div className="news__block">
                    <p className="news__text">{elem.text}</p>
                    <img src={elem.photo} className='news__image'/>
                </div>
            })}
        </div>
    );
    
}

export default OneNews;
