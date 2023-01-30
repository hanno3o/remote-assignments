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

const Counter = (props) => (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"> + </button>
    </div>
)

const App = () => {
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalplayers={1}
            />
            {/* Player List */}
            <Player name="hanno3o" score={50} />
            <Player name="hernsze" score={86} />
            <Player name="potato" score={25} />
            <Player name="chentingli" score={41} />
        </div>
    )
} 

ReactDOM.render(
    <App />,
    document.getElementById('root')
) 
