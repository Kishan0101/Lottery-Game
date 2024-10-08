import React, { useState } from "react";
import './Lottery.css'
import { genTicket, sum} from "./helper";

const Lottery = ()=>{

    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) == 15;
    let buyTicket = () =>{
        setTicket(genTicket(3))
    }

    return(
        <div className="h1">
        <h1>Lottery Game!</h1>

        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <button className="btn" onClick={buyTicket}>Buy new ticket</button>
        <h1>{isWinning && "Congratulation, you won! 🏆"}</h1>

        <div className="name">
        <h4>made by- <spam style= {{color:"orange"}}>Kishan</spam><spam style={{color:"white"}}>_Kumar</spam><spam style={{color:"green"}}>_Prajapati</spam></h4>
        </div>
        </div>
    )
};

export default Lottery;