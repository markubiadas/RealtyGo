import React from 'react'
import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import Form from "components/common/Form";


import { useShow } from '@pankod/refine-core';
import { CustomButton } from 'components';
import { useNavigate } from '@pankod/refine-react-router-v6';
import { Button, minWidth } from '@pankod/refine-mui';
import '../editProperty.css';

const CreateProperty = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
  const {
      refineCore: { onFinish, formLoading },
      register,
      handleSubmit,
  } = useForm();

  const handleImageChange = (file: File) => {
      const reader = (readFile: File) =>
          new Promise<string>((resolve, reject) => {
              const fileReader = new FileReader();
              fileReader.onload = () => resolve(fileReader.result as string);
              fileReader.readAsDataURL(readFile);
          });

      reader(file).then((result: string) =>
          setPropertyImage({ name: file?.name, url: result }),
      );
  };

  const onFinishHandler = async (data: FieldValues) => {
      if (!propertyImage.name) return alert("Please upload a property image");

      await onFinish({
          ...data,
          photo: propertyImage.url,
          email: user.email,
      });
  };

  const { queryResult } = useShow();
  const { data, isLoading, isError } = queryResult;
  const propertyDetails = data?.data ?? {};
  const handleCancel = () => {
    navigate(`/properties/show/${propertyDetails._id}`)
  }

  return (
    <div>
      <Form
          type="Edit"
          register={register}
          onFinish={onFinish}
          formLoading={formLoading}
          handleSubmit={handleSubmit}
          handleImageChange={handleImageChange}
          onFinishHandler={onFinishHandler}
          propertyImage={propertyImage}
      />
      
      

      {/* <Button variant='contained'
        sx={{padding: '10px 20px',
          textTransform: 'capitalize',
          fontSize: 16,
          fontWeight: 600,
          backgroundColor: 'red',
          marginTop: '1rem',
          // marginLeft: '1.2rem',
          minWidth: 130,
          '&:hover': {
            opacity: 0.9,
            backgroundColor: 'red'
          }
          }}
        onClick={handleCancel}
        >
          Cancel
        </Button> */}

        <CustomButton
          backgroundColor='red'
          color='white'
          handleClick={handleCancel}
          title='Cancel'
        />
      
    </div>
  );
};

export default CreateProperty;