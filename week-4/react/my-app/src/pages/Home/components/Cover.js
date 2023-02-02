const Cover = () => {
    function renderCoverText(e) {
        e.target.textContent = 'Have a Good Time!'
    }
    return <div onClick={renderCoverText} className="cover">
    ❝ 내가 아닌 모습으로 사랑받을 바에는 나의 모습으로 미움 받겠다 ❞
    </div>
}

export default Cover