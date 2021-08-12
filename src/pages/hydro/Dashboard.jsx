import React, { useEffect, useState } from 'react'
import { Grid, Header, Segment, Statistic } from 'semantic-ui-react'
import dateformat from 'dateformat'

const Dashboard = () => {
    const [jam, setJam]=useState(dateformat(Date.now(),"HH:MM:ss"))

    useEffect(()=>{
        setTimeout(()=>{
            setJam(dateformat(Date.now(),"HH:MM:ss"))
        },1000)
    })

    return (
        <Grid padded stackable>
            <Grid.Row columns='1'>
                <Grid.Column style={{paddingTop:'3rem'}}>
                    <Header as='h1' textAlign='center' color='grey'>
                        <Header.Content>
                            HYDRO-X
                        <Header.Subheader>New Technology of Hydroponic</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='3'>
                <Grid.Column>
                    <Segment textAlign='center' color='blue' style={{overflow:'auto'}}>
                        <Statistic label='Jam' value={jam} color='blue' />
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment textAlign='center' color='violet'>
                        <Statistic label='PPM' value={0} color='violet' />
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment textAlign='center' color='purple'>
                        <Statistic label='Flow Rate' value={0} color='purple' />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='1'>
                <Grid.Column>
                    <Segment textAlign='center' color='orange'>
                        No History Data
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='1'>
                <Grid.Column>
                    <Header as='h1' textAlign='center' color='grey'>
                        <Header.Content>
                        <Header.Subheader style={{fontSize:'0.9rem'}}>Copyright Ⓒ 2021</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Dashboard
