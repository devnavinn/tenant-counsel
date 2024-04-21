
import img from '../../assets/news/img2.png'
const News2 = () => {
    return (
        <div className="h-screen  flex justify-center items-center">
            <div className="max-w-6xl mx-auto flex justify-end flex-row w-full relative">
                <div className="w-3/5">
                    <img src={img} className='w-full h-full' />
                </div>
                <div className='max-w-md absolute top-[30%] left-[10%] p-7 rounded-lg shadow-lg bg-white '>
                    <span>5 min ago</span>
                    <h1 className='text-5xl text-gray-700 font-light py-5 leading-1'> <span className='font-medium' >Spotlight:</span>New White House Rule Aims to Curb Evictions...</h1>
                    <a href='' className='text-red-500'>Read more</a>
                </div>
            </div>
        </div>
    )
}

export default News2