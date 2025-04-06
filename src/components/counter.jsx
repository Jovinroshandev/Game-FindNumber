import { useState } from "react"
import counterBG from "../assets/images/counter-bg.png"
import resultBack from "../assets/images/result-bg.png"
import profileIMG from "../assets/images/profile.png"
import repanIMG from "../assets/images/repan.png"
import side1 from "../assets/images/side1.png"
import side2 from "../assets/images/side2.png"

function Counter() {
    const [count, setCount] = useState(0)
    const random = Math.floor(Math.random() * 10) + 1
    const [randomNum, setRandom] = useState(random)
    const [result, setResult] = useState("Try Your Luck")

    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        let newCount = count - 1
        if (newCount < 0) {
            newCount = 0
        }
        setCount(newCount)
    }
    const btnVerify = () => {
        if (randomNum === count) {
            setResult('You Are Win The Game!')
        }

        else {
            if (randomNum > count) {
                setResult('Try above number')
            }
            else {
                if (randomNum < count) {
                    setResult('Try below number')
                }
            }

        }
    }

    let backgroundStyle = {
        backgroundImage: `url(${counterBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

    }
    let resultBg = {
        backgroundImage: `url(${resultBack})`,
        backgroundSize: "250px 200px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

    }
    let resultBgmd = {
        backgroundImage: `url(${resultBack})`,
        backgroundSize: "350px 250px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

    }

    return (

        <div className="min-h-screen w-full bg-gradient-to-br from-red-500 to-red-900">
            <div>
                <div className="bg-black text-white font-bold px-2 w-32 md:w-48 absolute rounded-bl-xl h-6 md:h-10 mt-1 right-0">
                    <h1><span className="text-yellow-200">Score</span> 1000000</h1>
                </div>
                <div className="flex md:text-xl item-center gap-1 md:gap-2 bg-black text-white font-bold md:w-48 px-2 w-36 absolute md:h-10 rounded-br-full h-9 mt-1">

                    <img src={profileIMG} alt="Profile" className="w-9 h-9 md:w-10 md:h-10 rounded-full" />

                    <div>
                        <h1 className="text-yellow-200">Jenshika</h1>
                        <div className="w-26 h-2 bg-green-400 rounded-xl">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className=" hidden md:block w-80 absolute top-36 left-20" src={side1} alt="" />
                <div className="flex justify-center items-center">
                    <div className="absolute bottom-44 md:bottom-16">
                        <div className="hidden md:flex justify-center items-center p-28 relative md:w-96" style={resultBgmd}>
                            <h1 className="absolute text-2xl bottom-14 text-white font-bold" style={{fontFamily:'"Delius Swash Caps", cursive'}}>{result}</h1>
                        </div>
                        <div className="md:hidden flex justify-center items-center p-28 relative md:w-96" style={resultBg}>
                            <h1 className="absolute bottom-16 text-white font-bold" style={{fontFamily:'"Delius Swash Caps", cursive'}}>{result}</h1>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <button onClick={decrease} className="flex items-center justify-center text-3xl font-bold bg-black text-white  w-10 h-10 rounded-full">-</button>
                            <div style={backgroundStyle}>
                                <h1 className="text-2xl md:text-4xl p-16 text-center text-white">{count}</h1>
                            </div>
                            <button onClick={increase} className="flex items-center justify-center text-3xl font-bold bg-black text-white w-10 h-10 rounded-full">+</button>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={btnVerify} className="text-lg px-2 font-bold text-center bg-black rounded-3xl text-white">SUBMIT</button>
                        </div>
                    </div>
                </div>
                <img className="hidden md:block w-56 absolute top-36 right-44" src={side2} alt="" />
            </div>
        </div>
    )
}

export default Counter