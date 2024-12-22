import reactspin from '/public/ayuimages.jpg'
const Aboutme = () =>{
    return (
        <div className="abouttext" id="aboutme">
            <h2 className="section-titleabout">About Me</h2>
       <div className="about-me">
        <div className="about-meimg">
        <img src={reactspin} alt="" /> 
        </div>

        <div className="text-content">
            <p>I'm currently learning UI/UX design to understand how to create user-friendly designs that people enjoy interacting with. Along with that, I'm improving my frontend development skills to bring these designs to life using tools like HTML, CSS, and JavaScript.I love playing the game when I get the chance, and watching matches always excites me. Cricket teaches me teamwork, focus, and determination, which I try to apply to my learning and work as well. Both designing and cricket bring joy and creativity to my life. </p>
        </div>
       </div>
       </div>
    )
}
export default Aboutme;