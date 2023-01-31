const players = [
    {
        name: "hanno3o",
        score: 50,
        id: 1
    },
    {
        name: "hernsze",
        score: 85,
        id: 2
    },
    {
        name: "potato",
        score: 95,
        id: 3
    },
    {
        name: "shishi",
        score: 80,
        id: 4
    },
    {
        name: "chentingli",
        score: 16,
        id: 5
    }
]
const Header = (props) =>  {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">player: {props.totalplayers}</span>
        </header>
    )
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter score={props.score}/>
        </div>
    )
}

class Counter extends React.Component {
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment"> + </button>
            </div>
        )
    }
    
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalplayers={props.initialPlayers.length}
            />
            {props.initialPlayers.map(player => 
                <Player
                name={player.name}
                score={player.score}
                key={player.id.toString()} 
                 />
            )}
        </div>
    )
} 

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
) 
