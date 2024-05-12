function CustomButton(props) {
    const {text, onHandleClick} = props
    
    return (
        <button className="btn" onClick={onHandleClick}>{text}</button>
    )
}

export default CustomButton