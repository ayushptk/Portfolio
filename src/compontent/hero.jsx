import reactspin from '/Reactapp.gif'
const Herosec = () =>{
    return (
        <main className="hero">
<div className="hero-content">
<h1>Hello Namaskar🙏</h1>
<h1>I am Ayush</h1>
        <p>
         I am learning Frontend development and UI/UX Design 
         <br />and A true cricket fan and Webdeveloper.
        </p>
        <div className="button-social">
        <a href="/public/CV.pdf" target="_blank" download className="button-project-2">Download Cv</a>
        </div>
</div>

<div className="hero-image">  
<img src={reactspin} alt="" /> 
      </div>
        </main>
    )
}
export default Herosec;