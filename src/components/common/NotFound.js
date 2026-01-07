import { Link, useNavigate } from "react-router-dom";

function NotFound(){
        const navigate = useNavigate()
    
    return(
        <>
        <div>member/없는 경로 페이지는 존재하지 않습니다.</div>
        <button onClick={ () => navigate('/')}>HOME이동</button>
        </>
    )
}

export default NotFound;