const Input = ({ label, value}) => {
    return (
        <div className="input">
            <label htmlFor={label}>{label}</label>
            <input id={label} {...value} type="text" />
        </div>
    )
}

export default Input