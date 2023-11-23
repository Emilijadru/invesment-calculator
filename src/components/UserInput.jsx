import { useState } from "react";

const UserInput = ()=> {

    const [userInput, setUserInput]= useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    const handleChange = (inputIndentifier, newValue)=> {
        setUserInput((previousInput)=> {
            return {
                ...previousInput,
                [inputIndentifier]: newValue
            }
        })
    }
    return <section id="users-input">
        <div className="input-group">
    <p>
        <label>Initial Investment</label>
        <input type="number" value={userInput.initialInvestment} onChange={(ev)=> handleChange("initialInvestment", ev.target.value)} required />
    </p>
    <p>
        <label>Annual Investment</label>
        <input type="number" value={userInput.annualInvestment} onChange={(ev)=> handleChange("annualInvestment", ev.target.value)} required />
    </p>
    </div>
    <div className="input-group">
    <p>
        <label>Expected Investment</label>
        <input type="number" value={userInput.expectedReturn} onChange={(ev)=> handleChange("expectedReturn", ev.target.value)} required />
    </p>
    <p>
        <label>Duration</label>
        <input type="number" value={userInput.duration} onChange={(ev)=> handleChange("duration", ev.target.value)} required />
    </p>
        </div>
    </section>
}

export default UserInput;