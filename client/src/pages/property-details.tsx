import React from 'react';
import { Typography, Box, Stack } from '@pankod/refine-mui';
import { useDelete, useGetIdentity, useShow } from '@pankod/refine-core';
import { useNavigate, useParams } from '@pankod/refine-react-router-v6';
import { ChatBubble, Delete, Edit, Phone, Place, Star } from '@mui/icons-material';
import { CustomButton } from 'components';

const PropertyDetails = () => {
  const navigate = useNavigate();
  const {data: user} = useGetIdentity();
  const {id} = useParams();
  const {mutate} = useDelete();
  const {queryResult} = useShow();

  const {data, isLoading, isError} = queryResult;

  return (
    <div>property-details</div>
  )
}

export default PropertyDetails