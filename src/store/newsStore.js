import {create} from "zustand";

const useNewsStore = create((set)=>({
    news: [],
    setNews: (news)=> set( state => (
        {
            news: [
                ...news
            ]
        }
    )),

}))

export default useNewsStore;