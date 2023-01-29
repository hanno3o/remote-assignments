const title = 'My first React element!'
const desc = 'I just learned how to create a React node and render it into the DOM.'
const myTitleId = 'main-title'
const name = 'hanno3o'
const header = (
    <header>
        <h1 id= { myTitleId }>{ name }'s first React element!</h1>
        <p className="main-desc">{ desc }</p> 
        {/*像是在 HTML 中的 class, label 的 for，由於在 JS 中是保留字(preserve word)，所以需要額外改寫成 className 與 htmlFor*/}
        {/*這個是 JSX 的 comment 寫法*/}
        <input value= { 2*30*4 } />
    </header>
)
 


ReactDOM.render(
    header,
    document.getElementById('root')
)
