const Input = ({ label, value}) => {
    return (
        <div className="input">
            <label>{label}</label>
            <input {...value} type="text" />
        </div>
    )
}

export default Input