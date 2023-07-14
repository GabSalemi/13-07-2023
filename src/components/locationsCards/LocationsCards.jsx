import { useRouter } from "next/router";


const LocationsCards = ({data, id}) => {

    const Router = useRouter()

    const onHandleClick = (id) => Router.push(`/Locations/${id}`);

    

    return <div className="locations__card" onClick={() => onHandleClick(id)}> 
        <h2>{data.name}</h2>
        <h3>{data.location}</h3>
        <img src={data.imageLocation} alt={data.name} />
    </div>
}

export default LocationsCards;