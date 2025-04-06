import logoIMG from "../assets/images/nav_logo.png"

function Navbar(){
    return(
        <div>
            <div className="px-3 flex justify-between items-center bg-white">
                <div className="p-2 font-bold text-xl text-white">
                    <img src={logoIMG} alt="nav-logo" className="w-20 md:w-28"/>
                </div>
                <div className="md:hidden">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className="hidden md:flex gap-10 font-bold">
                    <p><a href="#">Home</a></p>
                    <p><a href="#">Contact Us</a></p>
                    <p><a href="#">About</a></p>
                </div>
            </div>
            <div className="bg-black text-white text-center text-xs md:text-lg">
                <h1>Find a random number. Try your luck!</h1>

            </div>
        </div>
    )
}
export default Navbar