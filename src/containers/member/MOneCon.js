import MOneCom from "../../components/member/MOneCom";
import {useSearchParams} from "react-router-dom";
import { getOne } from "../../service/member/member";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
function MOneCon(){
    const [params] = useSearchParams();
    //console.log(params.get("userId"))
    //getOne(params.get("userId"))
    //console.log( getOne(params.get("userId")) )
    const [data, setData] = useState()
    useEffect( ()=> {
        const id = params.get("userId")
        const result = getOne(id)
        setData(result[0]);
    },[params]) ;

    const navigate = useNavigate();

    const onDelete = (userId) => {
        navigate("/member/delete/"+userId)
        //console.log("del : ", userId)
    }

    return(
        
        <MOneCom data = {data} onDelete = {onDelete} />
    )
}

export default MOneCon;