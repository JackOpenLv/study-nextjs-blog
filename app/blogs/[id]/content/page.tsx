
export default async function Page(props: {params: Promise<{id:string}>}) {
    const params = await props.params
    const id = params.id
    return (
      <p>{id}</p>
    );
}

// function contents(id:string) {
//     return blogs.filter((bloginfo) => bloginfo.id === id);
// }