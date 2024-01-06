import { API } from "../backend";

export const getAllVideos=()=>{
        return fetch(`${API}/Videos`,
        {
                method:"GET"
        })
        .then(response=>{
                return response.json()
        })
        .catch(err=>{
                console.log(err);
        })
}


export const getVideo=(videoId)=>
{
    return fetch(`${API}/video/${videoId}`,
    {
            method:"GET"
    })
    .then(response=>{
            return response.json()
    })
    .catch(err=>{
            console.log(err);
    })
}

export const videoupload = (userId,token,video) => {
        return fetch(`${API}/video/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },body:video
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };