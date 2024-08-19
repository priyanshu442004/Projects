import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setEmails } from "../redux/appSlice";

const useGetAllMail=async()=>{
    const dispatch=useDispatch();
    const {emails}=useSelector(store=>store.app)
    useEffect(()=>{
        const fetchEmails=async()=>{
            try {
                const res=await axios.get('http://localhost:3000/api/v1/email/allemails',{withCredentials:true});
                dispatch(setEmails(res.data.email));
                
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchEmails()
    },[])
}
export default useGetAllMail