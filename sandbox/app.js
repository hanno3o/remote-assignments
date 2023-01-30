const Header = () =>  {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">player: 1</span>
        </header>
    )
}

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                hanno3o
            </span>
            <Counter />
        </div>
    )
}

const Counter = () => (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className="counter-action increment"> + </button>
    </div>
)

const App = () => {
    return (
        <div className="scoreboard">
            <Header />
            <Player />
        </div>
    )
} 

ReactDOM.render(
    <App />,
    document.getElementById('root')
) 
