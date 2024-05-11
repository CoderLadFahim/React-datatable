import Table from './components/Table/Table.jsx';
import './App.css'

function App() {
    const employees = [
        {
            name: 'Greg Heffley',
            years_of_experience: 2.5,
            is_married: false,
            age: 22,
        },
        {
            name: 'Rowley Jefferson',
            is_married: false,
            years_of_experience: 2,
            age: 18,
        },
        {
            name: 'Holly Hills',
            is_married: true,
            years_of_experience: 1,
            age: 24,
        },
        {
            name: 'Harry Gardener',
            is_married: true,
            years_of_experience: 5,
            age: 25,
        },
        {
            name: 'Hunter Zolomon',
            is_married: false,
            years_of_experience: 3,
            age: 23,
        },
        {
            name: 'Iris West',
            is_married: false,
            years_of_experience: .5,
            age: 32,
        },
    ]

    const columns = [
        {
            label: 'Name',
            key: 'name',
        },

        {
            label: 'Married',
            key: 'is_married',
        },
        {
            label: 'Age',
            key: 'age',
        },
        {
            label: 'Year of Exp',
            key: 'years_of_experience',
        },
    ]

    const actions = [
        {name: 'delete'},
        {name: 'edit'},
    ]


    return (
        <>
            <Table data={employees} columns={columns} actions={actions} />
        </>
    )
}

export default App
