function Bio(props) {
    return (
        <div className="bio">
            <h2>
            {props.frase}
            </h2>
            <button>
            Saiba mais
            </button>
        </div>)
}

export default Bio