import { Component } from 'react'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employers-list/employers-list'
import EmployeesAddForm from '../employers-add-form/employers-add-form'

import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: 'John', salary: 800, increase: false, like: true, id: 1 },
                { name: 'Alex', salary: 8000, increase: true, like: false, id: 2 },
                { name: 'Carl', salary: 80000, increase: false, like: false, id: 3 },
            ],
            term: '',
            filter:'all',
        }
        this.maxId = 3

    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(el => el.id !== id)
            }
        })
    }

    addNewPerson = (name, salary) => {

        const newPerson = {
            name,
            salary,
            increase: false,
            rise: false,
            id: ++this.maxId
        }
        if (newPerson.name.length < 3 || newPerson.salary.length === 0 || newPerson.salary < 1) {
            alert('Check input date')
        } else {

            this.setState(({ data }) => {
                const newArr = [...data, newPerson]
                return {
                    data: newArr
                }

            })
        }

    }

    OnToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(el => el.name.indexOf(term) > -1)
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }
    filterPost = (items,filter) => {
      switch(filter){
        case 'like':
            return items.filter(item => item.like)
      
        case 'moreThen1000':
            return items.filter(item => item.salary > 1000)
      
        default:
        return items
      }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }


    render() {
        const { data, term,filter } = this.state


        const visibleData = this.filterPost(this.searchEmp(data,term),filter)
        return (
            <div className="app">
                <AppInfo data={data} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    OnToggleProp={this.OnToggleProp} />

                <EmployeesAddForm
                    newPerson={this.addNewPerson} />
            </div>
        )
    }



}

export default App