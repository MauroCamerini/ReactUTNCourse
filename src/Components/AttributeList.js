import { useEffect, useState } from "react"
import AttributeListGroup from "./AttributeListGroup"

export default function AttributeList (props) {

    const [groups, setGroups] = useState([])

    const {attributes} = props

    /*
        Ordena los atributos por grupos
    */
    useEffect(()=> {
        if(!attributes) {
            setGroups([])
            return;
        }

        if(attributes.lenght === 0) {
            setGroups([])
            return;
        }

        let newGroups = []

        for(const attribute of attributes) {

            let groupIndex = newGroups.findIndex((group) => 
                 group.groupName === attribute.attribute_group_name
            )

            if(groupIndex === -1) {
                groupIndex = newGroups.push({groupName: attribute.attribute_group_name, attributes: []}) - 1
            }

            newGroups[groupIndex].attributes.push(attribute)
        }

        setGroups(newGroups)

    },[attributes])

    return (
        <div>
        <h2 className="display-4 mt-2">Información</h2>
        <div className="m-2 p-2 border">
            {groups.map((group, index) => <AttributeListGroup key={index} groupName={group.groupName} attributes={group.attributes}/>)}
        </div>
        </div>
    )
    
}