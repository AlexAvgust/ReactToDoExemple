import './employer-list-item.css'



const EmployeesListItem = (props) => {




        const {name,salary,onDelete,OnToggleProp,increase,like} = props

        let classNames = "list-group-item d-flex justify-content-between"
        if(increase){
            classNames += ' increase'
        }
        if(like){
            classNames += ' like'
        }
    
        return (
            <li className={classNames}>
                <span onClick={OnToggleProp} data-toggle='like' className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + `$`}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "

                        onClick={OnToggleProp}
                        data-toggle='increase'>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )

    
}

export default EmployeesListItem