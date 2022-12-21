const Avatar = ({ size }) => {
    let width = 'w-12'

    if (size === 'large') {
        width = 'w-24 md:w-36'
    }

    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img
                src="https://images.unsplash.com/photo-1611367540679-d94566094025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="avatar"
            />
        </div>
    )
}

export default Avatar
