import Link from 'next/link'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Avatar from '../components/Avatar'

const notifications = () => {
    return (
        <Layout>
            <h1 className="text-6xl mb-4 text-gray-300 ">Notifications </h1>
            <Card noPadding>
                <div>
                    <div className="flex gap-2 items-center border-b border-gray-100 p-4">
                        <Link href="/profile">
                            <Avatar />
                        </Link>

                        <p>
                            <Link
                                href="/profile"
                                className="font-semibold hover:underline"
                            >
                                John Doe
                            </Link>{' '}
                            liked{' '}
                            <Link
                                href=""
                                className="text-socialBlue hover:underline"
                            >
                                {' '}
                                your photo{' '}
                            </Link>
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 items-center border-b border-gray-100 p-4">
                        <Link href="/profile">
                            <Avatar />
                        </Link>

                        <p>
                            <Link
                                href="/profile"
                                className="font-semibold hover:underline"
                            >
                                John Doe
                            </Link>{' '}
                            liked{' '}
                            <Link
                                href=""
                                className="text-socialBlue hover:underline"
                            >
                                {' '}
                                your photo{' '}
                            </Link>
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 items-center border-b border-gray-100 p-4">
                        <Link href="/profile">
                            <Avatar />
                        </Link>

                        <p>
                            <Link
                                href="/profile"
                                className="font-semibold hover:underline"
                            >
                                John Doe
                            </Link>{' '}
                            liked{' '}
                            <Link
                                href=""
                                className="text-socialBlue hover:underline"
                            >
                                {' '}
                                your photo{' '}
                            </Link>
                        </p>
                    </div>
                </div>
            </Card>
        </Layout>
    )
}

export default notifications
