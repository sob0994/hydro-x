import { useEffect, useState } from "react"
import axios from "axios"
import { Table } from "semantic-ui-react"

const Dashboard=()=>{
    const [data, setData]=useState([])

    useEffect(()=>{
        setTimeout(()=>{
            axios.get("https://boyler-app.herokuapp.com/users").then(data=>{
                setData(data.data.data)
            }).catch(err=>{
                console.log(err)
            })

            console.log(data)
        }, 1000)
    })

    return(
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Data 1</Table.HeaderCell>
                        <Table.HeaderCell>Data 2</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    
                    {data.map((data, idx)=>{
                        return <Table.Row key={idx}>
                            <Table.Cell>{data.depan}</Table.Cell>
                            <Table.Cell>{data.belakang}</Table.Cell>
                        </Table.Row>
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
export default Dashboard