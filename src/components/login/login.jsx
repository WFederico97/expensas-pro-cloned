import { React, useState } from 'react';
import { Button, FormGroup, Form, Input, Label } from 'reactstrap';
import './login.css';



export default function LoginPage() {

  return (
    <div className='login '>
      <div className='col-xl-12 col-sm-6 d-flex float-end '>
        <img
          src='./images/EOL-Logo-wide.png'
          alt='expensas online logo'
          className='img-fluid '
        />
      </div>
      <div className='col-xl-12 col-sm-6 d-flex flex-wrap '>
        <div className='col-xl-12 col-sm-6'>
          <Form className='col-3 float-end' >
            <FormGroup>
              <Label for='usuario' hidden>
                Usuario
              </Label>
              <Input
                id='usuario'
                name='usuario'
                placeholder='Usuario'
                type='text'
                
              />
            </FormGroup>
            <FormGroup>
              <Label for='password' hidden>
                Contraseña
              </Label>
              <Input
                id='password'
                name='password'
                placeholder='Password'
                type='password'
                
              />
            </FormGroup>
          </Form>
        </div>
        <div className='col-xl-12 col-sm-6'>
        <Button className='buttonLogin col-5  float-end' size='lg' type='submit'>
            Ingresar
          </Button>
        </div>
      </div>
    </div>
  );
}
