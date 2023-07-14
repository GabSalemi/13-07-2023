import SingleLocationPage from "@/components/singleLocationPage"

export default function (props){
    

    return <div className="location__section">
                <SingleLocationPage data={props}/>
        </div>
}


export async function getServerSideProps(context) {
    const queryId = context.query.id - 1
  
    const res = await fetch(
      `https://api.npoint.io/a8298843d4a1a5adab2f/${queryId}`
    );
    const data = res.status === 200 ? await res.json() : {};
  
    return {
      props: {
        data: data,
      },
    };
  }
