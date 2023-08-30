
export default function AttributeListGroup (props) {

    const {groupName, attributes} = props

    return (
        <div>
            <h4>{groupName}</h4>

                <ul className="list-unstyled">
                {attributes.map((attr, index) => <li key={index}>{attr.name}: {attr.value_name}</li>)}
                </ul>
        </div>
    )
}