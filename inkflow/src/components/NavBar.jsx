export default function NavBar() {
    return (
        <div className="flex justify-between items-center bg-white shadow-sm p-2  hover:bg-gray-100 backdrop-blur-sm ring-1 ring-gray-200 max-w-screen-lg mx-auto ">
            <div className="flex items-center gap-1.5">
                <h2 className="text-xl font-semibold tracking-tight text-blue-800 select-none">Inkflow</h2>
            </div>
            <div className="relative">
                <i className='bxr  bx-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg'></i>
                <input type="text"
                placeholder="Search your notes"
                className="bg-white text-sm text-gray-700 placeholder-gray-400 border border-gray-300 pl-10 pr-4 py-2 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 w-[200px] focus:w-[260px]"/>
            </div>
        </div>

    );
}
