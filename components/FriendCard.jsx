import Avatar from './Avatar'
import Card from './Card'
import FriendInfo from './FriendInfo'

const FriendCard = () => {
    return (
        <Card>
            <h2 className="text-3xl mb-2">Friends</h2>
            <div>
                <div className="border-b border-gray-100 p-4 -mx-4 ">
                    <FriendInfo />
                </div>
                <div className="border-b border-gray-100 p-4 -mx-4 ">
                    <FriendInfo />
                </div>
                <div className="border-b border-gray-100 p-4 -mx-4 ">
                    <FriendInfo />
                </div>
                <div className="border-b border-gray-100 p-4 -mx-4 ">
                    <FriendInfo />
                </div>
            </div>
        </Card>
    )
}

export default FriendCard
