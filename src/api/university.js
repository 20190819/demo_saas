import request from "@/utils/request"

export const universities=(params)=>{
    return request({
        method:"GET",
        url:"/universities",
        params
    });
}