import {  GETMOVIESERROR, GETMOVIESLOADING, GETMOVIESSUCCES } from "./Types"

function moviesReducer(state={loading:false,data:null,error:null},action){
        switch (action.type){
            case (GETMOVIESSUCCES): return ({data: action.payload,error:null,loading:false});
            case (GETMOVIESERROR): return({data: null,error:action.error,loading:false})
            case(GETMOVIESLOADING):return({error:null,data:null,loading:true})
        }

    return state
}
export default moviesReducer