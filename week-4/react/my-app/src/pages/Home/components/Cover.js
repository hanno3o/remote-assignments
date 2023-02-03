import React, { useState } from 'react'

const Cover = () => {
    const [text, showText] = useState("❝ 내가 아닌 모습으로 사랑받을 바에는 나의 모습으로 미움 받겠다 ❞")
    return <div onClick={() =>showText("Have a good Time!")} className="cover">
    {text}
    </div>
}

export default Cover