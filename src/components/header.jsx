const Header = ()=> {
    return <header className="flex justify-between items-center px-20 py-4">
        <div className="flex items-center">
            <h1 className="px-4 py-4 font-bold text-2xl">Shade</h1>
            <p className="px-4 py-4 text-[#1f1f1f]">Landings</p>
            <p className="px-4 py-4 text-[#1f1f1f]">Pages</p>
            <p className="px-4 py-4 text-[#1f1f1f]">Blog</p>
            <p className="px-4 py-4 text-[#1f1f1f]">Support</p>
        </div>
        <button className="border-2	px-4 py-1 border-blue-400 text-blue-500 cursor-pointer rounded font-semibold">Get Started</button>
    </header>
}

export default Header