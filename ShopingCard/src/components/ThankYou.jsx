import { useNavigate } from "react-router-dom"

const ThankYou = ()=>{
    const navigation =useNavigate()
    return(
        <>
          <div>
          <img src="https://t4.ftcdn.net/jpg/05/05/39/07/360_F_505390776_8ilykzGiVSpIjUqdEXFhDY1ACRJZPDRD.jpg" className="w-60 border border-danger" alt="" />
          <button type="button" onClick={()=>navigation("/")} class="btn btn-primary" data-mdb-ripple-init>All Product</button>
          </div>
        </>
    )
}

export default ThankYou