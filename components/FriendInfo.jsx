import Avatar from './Avatar'

const FriendInfo = () => {
    return (
        <div className="flex gap-2">
            <Avatar />
            <div>
                <h3 className="font-bold text-xl">John Doe</h3>
                <p className="text-sm leading-3">5 mutual friends</p>
            </div>
        </div>
    )
}

export default FriendInfo
