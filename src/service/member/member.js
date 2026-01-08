let data_set = [
    {id : "aaa", pwd : "111", name : "홍길동", addr : "산골짜기"},
    {id : "bbb", pwd : "222", name : "김개동", addr : "개똥별"},
    {id : "ccc", pwd : "333", name : "고길동", addr : "마포구"}
]

function getList(){
    return data_set;
}
export {getList};
//export getList = () => data_set (중괄호 없으면 리턴 생략해도 됨)

export function getOne(id){
    //console.log("svc one id : ", id)
    return data_set.filter(data => data.id === id)
}

export const memberDelete = (delId) => {
    data_set = data_set.filter(data => data.id !== delId)
}