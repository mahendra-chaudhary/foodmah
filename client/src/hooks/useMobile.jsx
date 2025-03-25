import React,{useEffect, useState} from "react";

const useMoblie = (breaKpoint = 500)=>{
    const [isMoblie, setIsMoblie] = useState(window.innerWidth < breaKpoint);

    const handleResize = ()=>{
        const checkpoint = window.innerWidth < breaKpoint
        setIsMoblie(checkpoint)
        }
        useEffect(()=>{
            handleResize()
            window.addEventListener('resize',handleResize)

            return ()=>{
                window.removeEventListener('resize',handleResize)
            }

        },[])
        return [isMoblie]
    

    }
    export default useMoblie
