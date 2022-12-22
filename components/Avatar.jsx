const Avatar = ({ size, url }) => {
    let width = 'w-12'

    if (size === 'large') {
        width = 'w-24 md:w-36'
    }

    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img src={url} alt="avatar" />
        </div>
    )
}

export default Avatar
