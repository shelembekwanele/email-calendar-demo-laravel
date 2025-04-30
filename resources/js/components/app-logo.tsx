import { useEffect, useState } from 'react';
import AppLogoIcon from './app-logo-icon';
import axios from 'axios';
import { usePage } from '@inertiajs/react';

export default function AppLogo() {

    const {auth} =usePage().props;
    const [avatar, setAvatar] = useState("");
    const [email,setEmail] = useState("");

    useEffect(() => {
        axios.get("/oauth/user")
        .then(resp=>{
            setAvatar(resp.data?.user?.avatar);
            setEmail(resp.data?.user?.email);
        })
        .catch(err=>{
            console.error(err);
        });

    },[])

    return (
        <>
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                { avatar ? <img src={avatar} alt="Avatar" /> : <AppLogoIcon className="size-5 fill-current text-white dark:text-black" /> }
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">{email||auth.user.email}</span>
            </div>
        </>
    );
}
