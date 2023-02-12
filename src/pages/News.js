import React, {useEffect} from "react";
import {Link, useSearchParams} from "react-router-dom";
import SearchBar from "../components/SearchBar";
import useNews from "../hooks/useNews";
import { PuffLoader } from "react-spinners";
import useNewsStore from "../store/newsStore";
import Sort from "../components/Sort";

function News() {
    const [search, setSearch] = useSearchParams()

    const news = useNewsStore( state => state.news)

    const setNews = useNewsStore( state => state.setNews)

    const getNews = useNews()

    useEffect(() => {
        if(getNews.data){
            setNews(getNews.data)
        }    

    },[getNews.data])


    const allNews = news.map((pr)=> {
        const date = new Date(pr.created_at)
        return (
            <li key={pr.id} className="product__elem">
                <img className="product__img" src={pr.photo_preview} draggable="false"/>
                <div className="product__content__tetx">
                    <div className="product__name">{pr.title}</div>
                    <p className="product__text">{pr.preview + '...'}</p>
                    <div className="product__time">{date.getDate() + '.' + (date.getMonth()+1)  + '.' + date.getFullYear() + " " + date.getHours() + ':' + date.getMinutes()}</div>
                    <Link to={"/news/" + pr.id} className='product__link'>Детальніше</Link>
                </div>
            </li>
        )
    })
    
    return (
        <>
        <div className="main_page_background">
        </div>
        <div className="products _container">
            <div className="products__title">
                <div className="products__title__block">
                    <p>Duomo di Milano</p>
                </div>
            </div>
            <SearchBar/>
            <div className="products__sort__catalog">
            <Sort
                onChange={(e) => {
                    if(e.target.value === ''){
                        search.delete('ordering');
                        setSearch(search, {
                            replace: true,
                        });
                        return
                    }
                    search.set('ordering', e.target.value);
                    setSearch(search, {
                        replace: true,
                    });
                }}
                defaultValue={search.get('ordering')}
                name="sort"
                options={[
                    {
                        label: 'Без фільтрів',
                        value: '',
                    },
                    {
                        label: 'Спочатку старіші',
                        value: 'created_at',
                    },
                    {
                        label: 'Спочатку новіші',
                        value: '-created_at',
                    },
                ]}
            />
            </div>
            <div className={'flex'}>
                {getNews.isLoading 
                    ?   <div className="_container catalog__loading">
                            <PuffLoader size={'350px'} cssOverride={{'marginTop': '150px'}}/>
                        </div>
                    : getNews.isError 
                    ? <h1 className="ml-auto mr-auto">Помилка завантаження статей</h1>
                    : <ul className="products__list">{allNews}</ul>}
            </div>
        </div>
        </>
    )
}

export default News;