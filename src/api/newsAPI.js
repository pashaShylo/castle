import { $host } from ".";

export const getOne = async (id) => {
    return $host.get(`/news/${id}`)
}

export const getOneGallery = async (id) => {
    return $host.get(`/gallery/${id}`)
}