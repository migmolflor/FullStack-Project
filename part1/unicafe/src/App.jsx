import { useState } from 'react'

const Button = ({setValue, name, value}) => {
    const newValue = value + 1
    return(
        <button onClick={() => setValue(newValue)}>{name}</button>
    )
}

const StatisticsLine = ({value, name}) => {
    return(
        <>
        <td>{name}</td>
        <td>{value}</td>
        </>
    )
}

const Statistics = ({elements}) => {
    const total = elements[0].value + elements[1].value + elements[2].value
    const average = (elements[0].value + (elements[1].value * -1))/total
    const positives = ((elements[0].value * 100)/total)
    const elements2 = elements.concat([{name: "all", value: total}, {name:"average", value: average }, {name: "positive", value: positives}])

    if(total !== 0){
        return(
            <table>
                <tbody>

                    {elements2.map((element, index) => (
                        <tr key={index}>
                            <StatisticsLine name={element.name} value={element.value} />
                        </tr>
                    ))}

                </tbody>
            </table>)
    }else{
        return(
            <>
                <p>No feedback given</p>
            </>
        )
    }

}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const elements = [{name: "good", set: setGood, value: good }, {name: "neutral", set: setNeutral, value: neutral }, {name: "bad", set: setBad, value: bad }]


    return (
        <div>
            <h1>give feedback</h1>
            <div>
                {elements.map((element, index) =>
                    <Button key={index} setValue={element.set} name={element.name} value={element.value} />
                )}
            </div>
            <h1>Statistics</h1>
            <Statistics elements={elements} />
        </div>
    )
}

export default App