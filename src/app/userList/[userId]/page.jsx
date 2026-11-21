export default async function Page({ params }) {
    const { userId } = await params;

    return (
        <div>
            <h1>user information is: ({userId})</h1>
        </div>
    );
}


export function generateMetadata (){
    return {
        title: "welcome to alomgir website",
        description : "this is hablu programmer"
    }
}