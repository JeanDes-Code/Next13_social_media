import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
            <Component {...pageProps} />
        </SessionContextProvider>
    )
}
