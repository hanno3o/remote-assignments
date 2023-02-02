import { useState } from "react"

const Nav = () => {
    return <div>  
        <nav>
            <a href="http://www.cubeent.co.kr/gidle"><img src="./logo.png" className="logo" alt="Logo"/></a> 
            <input type="checkbox" id="toggler" />
            <label htmlFor="toggler">
                <div className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </label>
            <ul>
                <li><a href="https://zh.m.wikipedia.org/zh-tw/(G)I-DLE">(G)I-DLE</a></li>
                <li><a href="https://www.dcard.tw/f/entertainer/p/233889837">成員介紹</a></li>
                <li><a href="https://cafe.daum.net/cube-g-i-dle">官咖</a></li>
                <li><a href="https://youtube.com/playlist?list=PLeLhwIKudpq9ifaxPqrsWPZ2_7gm2n85T">發行歌曲</a></li>
            </ul>
        </nav> 
    </div>
    
}

export default Nav