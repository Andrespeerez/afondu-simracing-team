export default function Header () {
    return (
        <header className="p-10 py-[10px] fixed w-full flex justify-around items-center bg-slate-950">
            <a href="/" className="flex items-center">
                <img src="/public/logo-afondu.webp" alt="Logo de Afondu" 
                className="rounded-full" width="80" height="80" />
            </a>
            

            <nav className="flex flex-row gap-10 text-white text-xl font-semibold justify-center">
                <div>
                    <a href="/"
                    className="text-amber-300 text-sm border-b-2 border-amber-300 pb-1">
                        INICIO
                    </a>
                </div>
                <div>
                    <a href="/equipo"
                    className="text-sm">
                        <img src="" alt="" />
                    </a>
                </div>
                <div>
                    <a href="/media"
                    className="text-sm">
                        MEDIA
                    </a>
                </div>
            </nav>

            <div className="flex gap-8 items-center justify-between">
                <button
                className="border border-amber-300 text-amber-300 p-3 rounded-md font-bold text-sm">
                    CONTACTO
                </button>
                <div className="flex gap-5 items-center justify-between">
                    <a href="">
                        a
                    </a>
                    <a href="">
                        b
                    </a>
                    <a href="">
                        c
                    </a>
                </div>
            </div>
        </header>
    )
}