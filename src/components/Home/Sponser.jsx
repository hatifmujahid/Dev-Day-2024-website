import react from "react"
import handsPinch from "../../assets/handsPinch.png"

const Sponser = () => {
    return (
        <div>
            <div className="mx-12 flex items-center justify-between ">
                <div>
                    <h2>BROUGHT TO</h2>
                    <h2>YOU BY</h2>
                </div>

                <div>
                    <img src={handsPinch} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sponser;