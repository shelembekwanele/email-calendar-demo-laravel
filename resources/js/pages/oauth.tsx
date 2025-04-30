import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, router } from "@inertiajs/react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import axios from "axios";

export default function OAuth({ user }) {
    useEffect(() => {
        console.log({user})
        axios.post("/oauth/process",{user})
        .then(resp=>{
            alert("connected to google");
        })
        .catch(err=>{
            console.error(err);
            alert("error connecting to google");
        })
        .finally(()=>{
            router.get("/dashboard");
        })
        
    }, [user]); 

    return (
        <>
            <Head title="Oauth" />
            <div className="h-screen w-full flex justify-center items-center flex-col">
                <FontAwesomeIcon icon={faSpinner} className="text-5xl animate-spin" />
                <small className="block m-5">Please wait for redirect...</small>
            </div>
        </>
    );
}
