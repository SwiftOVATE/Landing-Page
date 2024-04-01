export const ProjectNavbar = () => {
    return (
        <div>
            <div className='fixed w-full top-0 bg-white dark:bg-gray-800 z-50 items-center shadow-sm'>
                <nav className={`container flex flex-row justify-between dark:bg-gray-800 mx-auto p-3 py-4 font-sans`}>
                    <div
                        className="group cursor-pointer text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white">
                        <a
                            href="https://github.com/SwiftOVATE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row">
                            <img src="https://avatars.githubusercontent.com/u/119154961?s=200&v=4" className="mr-3 h-6 sm:h-9 rounded-lg group-hover:brightness-105 group-hover:scale-105 transition-transform duration-300 ease-in-out transform group-hover:shadow-lg" alt="Logo" />
                            <span className="self-center whitespace-nowrap text-xl font-semibold">
                                SwiftOVATE
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}
