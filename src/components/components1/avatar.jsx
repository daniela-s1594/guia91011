import { getImageUrl } from "./getImg";
import React from "react";

function Avatar({ person, size }) {
    return (
        <img className="avatar" src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

export default function Profile() {

    return (
        <>
            <div className="card">
                <Avatar size={100}
                person={{name:"Mariela paprika",imageId:"ergdf"}} />{" "}
            </div>
            <div className="card">
                <Avatar size={80}
                person={{name:"Julian Perdomo",imageId:"aeghg"}} />{" "}
            </div>
            <div className="card">
                <Avatar size={50}
                person={{name:"cleopatra",imageId:"jdfzx"}} />{" "}
            </div>
        </>
    )

}