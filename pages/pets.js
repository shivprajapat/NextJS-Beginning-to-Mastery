import Image from "next/image";
import React from "react";
import img from '../public/1.jpg'
const PetsPage = () => {
    return (
        <div>
            <h1>Pets Page</h1>
            <Image
                src={img}
                placeholder="blur"
                alt="pet"
                width="280"
                height="420"
            />
            {["1", "2", "3", "4", "5"].map((path, index) => (
                <Image
                    src={`/${path}.jpg`}
                    alt="pet"
                    width="280"
                    height="420"
                    key={index}
                />
            ))}
        </div>
    );
};

export default PetsPage;
