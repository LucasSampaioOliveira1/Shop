'use client';

import { signOut } from "next-auth/react";

const LogoutButton = () => {
    return ( 
        <button className="p-3 border-2 border-red-500 bg-slate-600 text-white hover:bg-neutral-700" onClick={() => signOut()}>Sair</button>
     );
}
 
export default LogoutButton;