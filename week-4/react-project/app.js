const Box = () => {
    return (
    <div>
        box
    </div>
    )
}
const Wrap = () => {
    return (
    <div>
        <Box />
        <Box />
        <Box />
        <Box />
    </div>
    )
}

const Session = () => {
    return (
    <div>
        <h3><i class="fa-solid fa-fire"></i> Hit Songs</h3>
        <Wrap />
        <a href="#" className="cta">看更多歌曲</a>
        <Wrap />
    </div>
    )
}

const Cover = () => {
    return (
    <div>
    ❝ 내가 아닌 모습으로 사랑받을 바에는 나의 모습으로 미움 받겠다 ❞
    </div>
    )
}

const Nav = () => {
    return (
    <div>
        <li><a href="https://zh.m.wikipedia.org/zh-tw/(G)I-DLE">(G)I-DLE</a></li>
        <li><a href="https://www.dcard.tw/f/entertainer/p/233889837">成員介紹</a></li>
        <li><a href="https://cafe.daum.net/cube-g-i-dle">官咖</a></li>
        <li><a href="https://youtube.com/playlist?list=PLeLhwIKudpq9ifaxPqrsWPZ2_7gm2n85T">發行歌曲</a></li>
    </div>
    )
}

const MyApp = () => {
    return (
    <div>
        <Nav />
        <Cover />
        <Session />
    </div>
    )
}



/* 
========================================
第一步：根據設計圖定義資料結構並且做出假資料
========================================
 */
const boxes = [
    {
      title: "Nxde",
      imgUrl: "https://danmee.jp/wp-content/uploads/2022/10/GIDLE-Nxde-MV-1024x569.png"
    },
    {
      title: "Tomboy",
      imgUrl: "https://i.ytimg.com/vi/f3AhXS_sgr4/maxresdefault.jpg"
    },
    {
      title: "MY BAG",
      imgUrl: "https://i.ytimg.com/vi/HyTSzQocStI/maxresdefault.jpg"
    },
    {
      title: "Latata",
      imgUrl: "https://thebiaslistcom.files.wordpress.com/2018/05/gi-dle-latata.jpg"
    },
    {
      title: "Hann",
      imgUrl: "https://www.billboard.com/wp-content/uploads/media/G-idle-Hann-2018-vid-billboard-1548.jpg"
    },
    {
      title: "Dumdi Dumdi",
      imgUrl: "https://kpopping.com/documents/c4/5/2000/80108389_20200819100733_org.jpeg?v=ba791"
    },
    {
      title: "Villan Dies",
      imgUrl: "https://media.allure.com/photos/625cbce5cb478756af23433f/master/pass/gidle%20tomboy%20cover%20photo%20final.jpg"
    },
    {
      title: "Oh Ny God",
      imgUrl: "https://nosubmarinesdotcom.files.wordpress.com/2020/04/cgwttir.jpg"
    }
]

// ========================================
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<MyApp />)
