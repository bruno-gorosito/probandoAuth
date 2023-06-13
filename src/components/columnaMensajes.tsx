


const ColumnaMensajes = () => {
    return(
        <>
            <div className="w-full lg:w-8/12 p-4 relative h-screen after:h-full after:w-px after:bg-cyan-600  after:content-[''] after:absolute after:top-0 after:right-0">
                <div className="flex justify-between items-center relative mb-4 px-2">
                    <div className="flex items-center">
                        <div className="w-10 aspect-square rounded-full bg-red-200 mr-3">
                            <svg className="h-full aspect-square fill-gray-800 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                        </div>
                        
                        <h2>Receiver's name</h2>
                    </div>
                </div>
                <div className="h-px w-full bg-cyan-400 bottom-0"></div>
                
            </div>
        </>
    )
}

export default ColumnaMensajes;