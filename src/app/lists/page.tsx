import ListsTab from '../lists/ListsTab';


export default async function ListsPage({searchParams}
    : {searchParams: Promise<{type: string}>}) {
      
    const {type} = await searchParams;


    return (
        <div>
            <ListsTab />
        </div>
    );
}