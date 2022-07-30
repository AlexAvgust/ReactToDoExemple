import EmployeesListItem from "../employer-list-item/employer-list-item"
import './employers-list.css'

const EmployersList = ({data,onDelete,OnToggleProp}) => {

    const elements = data.map(item => {
        const {id,...itemProps} = item
        return (
            <EmployeesListItem key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            OnToggleProp={(e) => OnToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
 
            />
        )
    })

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployersList