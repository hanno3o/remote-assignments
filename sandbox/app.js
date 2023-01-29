const title = React.createElement(
    'h1',
    {id: 'main-title', title: 'This is a title'},
    'My firsr React element!'
)

ReactDOM.render(
    title,
    document.getElementById('root')
)