import React from 'react'
import { useGetIdentity, useOne } from '@pankod/refine-core'
import { Profile } from 'components'

const MyProfile = () => {
  const {data: user} = useGetIdentity();
  const{data, isLoading, isError} = useOne({
    resource:'users',
    id: user?.userid,
  })

  return (
    <div>my-profile</div>
  )
}

export default MyProfile