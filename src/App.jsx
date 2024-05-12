import Table from './components/Table/Table.jsx'
import './App.css'

function App() {
	const handleAction = (row, name) => {
        console.log(row, name)
	}

	const options = {
	    data: [
		    {
			    id: 2,
			    name: 'Greg Heffley',
			    years_of_experience: 2.5,
			    is_married: false,
			    age: 42,
		    },
		    {
			    id: 4,
			    name: 'Rowley Jefferson',
			    is_married: false,
			    years_of_experience: 2,
			    age: 58,
		    },
		    {
			    id: 6,
			    name: 'Holly Hills',
			    is_married: true,
			    years_of_experience: 1,
			    age: 84,
		    },
		    {
			    id: 8,
			    name: 'Harry Gardener',
			    is_married: true,
			    years_of_experience: 5,
			    age: 50,
		    },
		    {
			    id: 10,
			    name: 'Hunter Zolomon',
			    is_married: false,
			    years_of_experience: 3,
			    age: 23,
		    },
		    {
			    id: 12,
			    name: 'Iris West',
			    is_married: false,
			    years_of_experience: 0.5,
			    age: 32,
		    },
	    ],
	    columns:
        [
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
			    label: 'Years of Experience',
			    key: 'years_of_experience',
		    },
	    ],
	    filters: [
	        {
	            label: 'Married',
	            key: 'is_married',
	            modifier: (value) => value === true
	        },
	        {
	            label: '2+ years of exp',
	            key: 'years_of_experience',
	            modifier: (value) => value > 2
	        },
	        {
	            label: 'Is Over 50',
	            key: 'age',
	            modifier: (value) => value > 50
	        },
	    ],
	    actions: [{name: 'delete', label: 'Delete'}, {name: 'edit', label: 'Edit'}]
	}

	return (
		<div className='grid place-items-center'>
			<Table
			    options={options}
			    actionHandler={handleAction}
			/>
		</div>
	)
}

export default App
