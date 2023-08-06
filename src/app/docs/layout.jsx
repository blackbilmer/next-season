import Header from './Header.jsx'
import Main from './main.jsx'
// import Page from ''

export const metadata = {
    title: 'docs',
    description: 'Generated by create next app',
}


export default function DocsLayout({ children }) {
    return (
        <>
            <main>
                <Main />
                <div className="display container">
                    <Header />
                    <div className="children">
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}
