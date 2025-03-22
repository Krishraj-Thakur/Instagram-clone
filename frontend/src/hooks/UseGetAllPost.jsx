import axios from "axios";
import {useEffect} from "react";

const useGetAllPost = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAllPost = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/v1/host/get",{withCredentials:true});
                if(res.data.success){
                    dispatch 
                }
            } catch (error) {
                
            }
        }
    })
}