import request from "@/utils/request"

export const login=(data)=>{
    return request({
        method:"POST",
        url:"/auth/login",
        data
    });
}

export const logout=(data)=>{
    return request({
        method:"POST",
        url:"/auth/logout",
        data
    });
}

export const me=(params)=>{
    return request({
        method:"GET",
        url:"/auth/me",
        params
    });
}
