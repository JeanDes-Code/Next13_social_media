const Card = ({ children, noPadding }) => {
    let classes = 'bg-white shadow-gray-300 shadow-md rounded-md mb-5 '
    if (!noPadding) {
        classes += ' p-4'
    }
    return <div className={classes}>{children}</div>
}

export default Card
