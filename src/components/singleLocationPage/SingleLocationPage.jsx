
import { roomList } from "../../mocks/roomlist";
import { useState } from "react";


const SingleLocationPage = ({data}) => {
 
    const [singleRoom, setSingleRoom] = useState(data.data)

    return <div className="location__section">
                <div className="place__div">
                    <h2>{singleRoom.location}</h2>
                    <img src={singleRoom.imageLocation} alt={singleRoom.name} />
                </div>
                <div className="description__div">
                    <h3>{singleRoom.name}</h3>
                    <p>{singleRoom.description}</p>
                    <ul>
                        {singleRoom.amenities.map((element) => {
                            return <li>{element}</li>
                        })}
                    </ul>
                </div>
                <div className="comments">
                    <h3>{singleRoom.rating}</h3>
                    <div>
                        <h4>Reviews:</h4>
                        <ul>
                            {singleRoom.reviews.map((element) => {
                                return <div>
                                    <span>{element.author}</span>
                                    <p>{element.comment}</p>
                                </div>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="contacts">
                    <h5>Contacts:</h5>
                    <span>{singleRoom.contact.phone}</span>
                    <span>{singleRoom.contact.email}</span>
                    <span>{singleRoom.website}</span>
                    
                </div>
        </div>
}

export default SingleLocationPage;
