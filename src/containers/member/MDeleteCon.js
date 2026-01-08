import {useParams} from "react-router-dom"
import {memberDelete } from "../../service/member/member";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
function MDeleteCon(){
    const params = useParams();
    //const {id} = useParams(); 위랑 똑같음
    //console.log("del : ", params.id)
    const navigate = useNavigate();
   
    useEffect( () => { 
        alert("삭제 성공")
        navigate("/member/list")
        memberDelete(params.id)
    }, [])


    return null
}

export default MDeleteCon;