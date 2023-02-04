import logo from "../logo.png"
import React, { useState } from 'react'

const Nav = () => {
    const links = [
        {
            href: "https://zh.m.wikipedia.org/zh-tw/(G)I-DLE",
            linkName: "(G)I-DLE",
            id: 1
        },
        {
            href: "https://www.dcard.tw/f/entertainer/p/233889837",
            linkName: "成員介紹",
            id: 2
        },
        {
            href: "https://cafe.daum.net/cube-g-i-dle",
            linkName: "官咖",
            id: 3
        },
        {
            href: "https://youtube.com/playlist?list=PLeLhwIKudpq9ifaxPqrsWPZ2_7gm2n85T",
            linkName: "發行歌曲",
            id: 4
        }
    ]
    const linkItems = links.map(link => {
        return <li>
            <a 
            href={link.href}
            key={link.id}
            >
            {link.linkName}
            </a>
        </li>
    })
    const [active, setActive] = useState("")
    return <div>  
        <nav>
            <a href="http://www.cubeent.co.kr/gidle"><img src={logo} className="logo" alt="Logo"/></a> 
            <input type="checkbox" id="toggler" />
            <label htmlFor="toggler">
                <div 
                className="burger active"
                onClick={() => setActive("active")}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </label>
            <ul className={active}>
                {linkItems}
            </ul>
        </nav> 
    </div>
}

export default Nav