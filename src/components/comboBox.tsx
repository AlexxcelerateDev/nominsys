import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const people = [
    'María López hernandez',
]

export default function MyCombobox() {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
            <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
            <Combobox.Options>
                {filteredPeople.map((person) => (
                    <Combobox.Option key={person} value={person}>
                        <div className='text-white'>{person}</div>
                    </Combobox.Option>
                ))}
            </Combobox.Options>
        </Combobox>
    )
}