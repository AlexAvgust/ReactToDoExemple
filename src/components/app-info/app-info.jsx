
import './app-info.css'

const AppInfo = ({data}) => {
    let count = 0
    data.forEach(el => (el.increase === true)? count++ : count)
    return (
        <div className="app-info">
            <h1>Accounting for employees in the company </h1>
            <h2>Total amount employees: {data.length}</h2>
            <h2>Bonus receive: {count}</h2>
        </div>
    )
}


export default AppInfo