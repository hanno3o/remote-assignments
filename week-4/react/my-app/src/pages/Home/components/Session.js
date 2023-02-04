import { useState } from "react"

const Session = () => {
    const boxes = [
        {
            className: "content-box box-1",
            boxName: "Nxde",
            id: 1
        },
        {
            className: "content-box box-2",
            boxName: "Tomboy",
            id: 2
        },
        {
            className: "content-box box-3",
            boxName: "MY BAG",
            id: 3
        },
        {
            className: "content-box box-4",
            boxName: "Latata",
            id: 4
        }
    ]
    const hiddenBoxes = [
        {
            className: "content-box box-5",
            boxName: "Hann",
            id: 1
        },
        {
            className: "content-box box-6",
            boxName: "Dumdi Dumdi",
            id: 2
        },
        {
            className: "content-box box-7",
            boxName: "Villan Dies",
            id: 3
        },
        {
            className: "content-box box-8",
            boxName: "Oh My God",
            id: 4
        }
    ]
        
    const boxItems = boxes.map(box => {
        return <div 
        className={box.className}
        key={box.id}
        >
            {box.boxName}
        </div>
    })
    const hiddenBoxItems = hiddenBoxes.map(box => {
        return <div 
        className={box.className}
        key={box.id}
        >
            {box.boxName}
        </div>
    })
    const [hiddenWrap, showHiddenWrap] = useState("wrap-hidden")
    return <div>
        <section>
            <h3><i className="fa-solid fa-fire"></i> Hit Songs</h3>
            <div className="wrap">
                {boxItems}
            </div>
            <a href="#" 
               onClick={() => showHiddenWrap("wrap")}
               className="cta">
               看更多歌曲
            </a>
            <div className={hiddenWrap}>
                {hiddenBoxItems}
            </div>
        </section>
    </div>
}

export default Session