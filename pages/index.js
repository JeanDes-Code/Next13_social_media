import PostFormCard from './../components/PostFormCard'
import PostCard from './../components/PostCard'
import Layout from './../components/Layout'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import LoginPage from './login'
import { useEffect, useState } from 'react'
import { UserContext } from './../context/UserContext'

export default function Home() {
    const session = useSession()
    const supabase = useSupabaseClient()
    const [posts, setPosts] = useState([])
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        fetchPosts()
    }, [])

    useEffect(() => {
        if (!session?.user?.id) {
            return
        }
        supabase
            .from('profiles')
            .select()
            .eq('id', session.user.id)
            .then((res) => {
                if (res.data) {
                    setProfile(res.data[0])
                }
            })
    }, [session?.user?.id])

    const fetchPosts = () => {
        supabase
            .from('posts')
            .select('id, content, created_at, profiles(id, name, avatar)')
            .order('created_at', { ascending: false })
            .then((res) => {
                setPosts(res.data)
            })
    }

    if (!session) {
        return <LoginPage />
    }

    return (
        <Layout>
            <UserContext.Provider value={{ profile }}>
                <PostFormCard onPost={fetchPosts} profile={profile} />
                {posts &&
                    posts.map((post) => (
                        <PostCard key={post.id} {...post} profile={profile} />
                    ))}
            </UserContext.Provider>
        </Layout>
    )
}
