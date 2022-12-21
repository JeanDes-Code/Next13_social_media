import Link from 'next/link'
import Card from './Card'

const PhotoCard = () => {
    return (
        <Card>
            <div className="grid grid-cols-2 gap-4">
                <Link href="">
                    <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1598395927056-8d895e701c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                            alt="greece trip"
                        />
                    </div>
                </Link>
                <Link href="">
                    <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80"
                            alt="greece trip2"
                        />
                    </div>
                </Link>
                <Link href="">
                    <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1533441865127-f4806aaa12cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            alt="greece trip3"
                        />
                    </div>
                </Link>
                <Link href="">
                    <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1525078156886-afd74cba47e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGdyZWVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                            alt="greece trip4"
                        />
                    </div>
                </Link>
            </div>
        </Card>
    )
}

export default PhotoCard
