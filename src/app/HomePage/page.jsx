

import { getServerSession } from "next-auth"; 
import { redirect } from "next/navigation";
import LogoutButton from "../components/LogoutButton";


export default async function HomePage() {
    const session = await getServerSession();

    if(!session) {
        redirect('/Login');
    }

    return(
        <section className="text-white">

            <div>
                Olá {session?.user?.name}
            </div>
            <h1>Bem vindo a Home Page</h1>
            <div>
                <LogoutButton/>
            </div>
        </section>
    );
}