function About({ image, about }) {
    return (
        <>
            <img src={image} alt="blog logo" ></img>
            <p>{about}</p>
        </>
    )
}

export default About