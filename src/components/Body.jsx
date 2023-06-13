import React ,{useState }from 'react'

export default function Body() {
    const [note,setNote]=useState("");
    const[list,setList]=useState(JSON.parse(localStorage.getItem("list"))||[]);

const delete1=(b)=>{
    console.log(b);
    const list1=[...list];
    list1.splice(b,1);
    setList(list1);
    localStorage.setItem("list",JSON.stringify(list))
}
const addItem=()=>{
setList((value)=>[...value,note])

}


console.log(list);
  return (
    <>
  <div className="body-item1">
    <div className="body-item1-1">Title</div>
    <input className="body-item1-2" placeholder="Nhập" onInput={(e)=>setNote(e.target.value)} />

    <div className="body-item1-3" >
      <div className="body-item1-3-1">
        <div className="body-item1-3-1-1" onClick={addItem}>
          <div>+</div>
        </div>
      </div>
    </div>
  </div>

  <div className="body-item2">
  {list.map((a,b)=>
    
    <div className="body-item2-1">
      <div className="body-item2-1-1">{a}</div>
      <div className="body-item2-1-2">
        <div className="body-item2-1-3">
          <div onClick={()=>delete1(b)}>Xoá</div>
        </div>
      </div>
    </div>
  )}
 </div>
</>

    
  )
}
