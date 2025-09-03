export default function layout({ children }) {
    return (
        <div>
            <h1>Header</h1>

            <p>here header and footer are reusable Urls because of layout.js file</p>
            <h3>whenever we wanna to creat Re-usable url inside the children and any nester segment we use this method.</h3>
            {children}
            <h1>footer</h1>
        </div>
    )
}
