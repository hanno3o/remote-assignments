import { useState } from "react"

const Session = () => {
    const [hiddenWrap, showHiddenWrap] = useState("wrap-hidden")
    return <div>
        <section>
            <h3><i className="fa-solid fa-fire"></i> Hit Songs</h3>
            <div className="wrap">
                <div className="content-box box-1">Nxde</div>
                <div className="content-box box-2">Tomboy</div>
                <div className="content-box box-3">MY BAG</div>
                <div className="content-box box-4">Latata</div>
            </div>
            <a href="#" 
               onClick={() => showHiddenWrap("wrap")}
               className="cta">
               看更多歌曲
            </a>
            <div className={hiddenWrap}>
                <div className="content-box box-5">Hann</div>
                <div className="content-box box-6">Dumdi Dumdi</div>
                <div className="content-box box-7">Villain Dies</div>
                <div className="content-box box-8">Oh My God</div>
            </div>
        </section>
    </div>
}

export default Session