
export default async function MessagesPage({searchParams}: 
      {searchParams: Promise<{container: string}>}) {
    const {container} = await searchParams;

    return (
        <div className='grid grid-cols-12 gap-5 h-[80vh] mt-10'>
            <div className='col-span-2'>
                
            </div>
            <div className='col-span-10'>
               
            </div>
        </div>
    );
}