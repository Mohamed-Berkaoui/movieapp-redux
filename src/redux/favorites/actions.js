import { ADDTOFAVORITES, REMOVEFROMFAVORITES } from "./types"

export const addToFavoritesAction=function(movie){
    return {type:ADDTOFAVORITES,payload:movie}
}
export const removeFromFavorites=function(movie){
    return {type:REMOVEFROMFAVORITES,payload:movie}
}