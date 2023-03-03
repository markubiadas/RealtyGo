import React from 'react'
import { useOne } from '@pankod/refine-core'
import { useParams } from '@pankod/refine-react-router-v6'
import { Profile } from 'components'

const AgentProfile = () => {
  const {id} = useParams();

  const{data, isLoading, isError} = useOne({
    resource:'users',
    id: id as string
  })

  console.log(data)

  const MyProfile = data?.data ?? [];

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error</div>

  return (
    <Profile 
      type="Agent"
      name={MyProfile.name}
      email={MyProfile.email}
      avatar={MyProfile.avatar}
      properties={MyProfile.allProperties}
    />
  )
}

export default AgentProfile