

import { getServerSession } from "next-auth"; 

export default async function HomePage() {
    const session = await getServerSession();

    return(
        <section>

            <div>
                Olá {session?.user?.name}
            </div>
            <h1>Bem vindo a Home Page</h1>
        </section>
    );
}