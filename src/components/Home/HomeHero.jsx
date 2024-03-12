import react from "react"
import logoIcon from "../../assets/logoIcon.png"
import Nav from "../Nav"

const HomeHero = () => {
    return (
        <>
            <Nav/>
            <div className="flex justify-center items-center h-screen bg-[#03071C] ">
                <img src={logoIcon}/>
                
                <div className="flex justify-start flex-col">
                    <h2 className="text-9xl">Developer's</h2>
                    <h2>
                        <span>
                            Day
                        </span>
                        <span>
                            ‘24
                        </span>
                    </h2>
                </div>
            </div>
        </>
    );
}

export default HomeHero;