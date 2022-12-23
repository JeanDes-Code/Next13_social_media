import { useContext, useState } from 'react'
import Avatar from './Avatar'
import Card from './Card'
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { UserContext } from './../context/UserContext'

const PostFormCard = ({ onPost }) => {
    const [content, setContent] = useState('')
    const supabase = useSupabaseClient()
    const session = useSession()

    const { profile } = useContext(UserContext)

    const handlePost = async () => {
        supabase
            .from('posts')
            .insert({
                author: session.user.id,
                content,
            })
            .then((res) => {
                if (!res.error) {
                    setContent('')
                    if (onPost) {
                        onPost()
                    }
                }
            })
    }

    return (
        <Card>
            {profile && (
                <div className="flex gap-2">
                    <div>
                        <Avatar url={profile.avatar} />
                    </div>

                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="grow p-3 outline-none h-14"
                        placeholder={`Whats on your mind ${profile.name}?...`}
                    />
                </div>
            )}

            <div className="flex items-center gap-5 mt-2">
                <div>
                    <button className="flex gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                        </svg>
                        <span className="hidden md:block">People</span>
                    </button>
                </div>
                <div>
                    <button className="flex gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                        <span className="hidden md:block">Check in</span>
                    </button>
                </div>
                <div>
                    <button className="flex gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                        </svg>
                        <span className="hidden md:block">Mood</span>
                    </button>
                </div>

                <div className="grow text-right">
                    <button
                        onClick={handlePost}
                        className="bg-socialBlue text-white px-6 py-1 rounded-md"
                    >
                        <span className="">Share</span>
                    </button>
                </div>
            </div>
        </Card>
    )
}

export default PostFormCard
