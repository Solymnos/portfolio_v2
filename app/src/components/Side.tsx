const Side = () =>
{
    return (
        <div className='bg-prim absolute left-8 top-1/3 flex flex-col p-2 rounded-tr-2xl rounded-br-2xl gap-2 z-10'>
            <img className='max-h-8 max-w-8 cursor-pointer' src='/img/code.png'/>
            <img className='max-h-8 max-w-8 cursor-pointer' src='/img/per.png'/>
            <img className='max-h-8 max-w-8 cursor-pointer' src='/img/mail.png'/>
            <img className='max-h-8 max-w-8 cursor-pointer' src='/img/doc.png'/> 
        </div>
    )
}

export default Side;