import React from 'react';
import { Container, FormWrapper, Icon, FormContent, Form, FormH1, FormLabel, FormInput, Button, Text } from './SinginStyledComponents';

const SinginElmenets = () => {
  return (
    <>
      <Container>
        <FormWrapper>
          <Icon to='/'>dolla</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sing in your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Passworld</FormLabel>
              <FormInput type='passsword' required />
              <Button type='submit' required>Continue</Button>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>

        </FormWrapper>
      </Container>
    </>
  );
};

export default SinginElmenets;
