import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Modal } from 'semantic-ui-react'
//import Signup from './Signup'

class Login extends Component{

  constructor(){
    super();
    this.state={
      username: 'username',
      password: 'password'
    }
  }

  handleChange = e => {this.setState({[e.target.name]: e.target.value})}

  render(){
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='red' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large' onSubmit={e => this.props.handleSubmit(this.state, 'login')}>
        <Segment stacked>
          <Form.Input fluid icon='user' name='username' iconPosition='left' placeholder='Username' onChange={this.handleChange}/>
          <Form.Input
            fluid
            onChange={this.handleChange}
            name='password'
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='red' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message >
        New to us?  
        <Modal trigger={<Button>Sign Up</Button>}>
          <Modal.Header>Please enter the following:</Modal.Header>
          <Modal.Content>
          <Form size='large' onSubmit={e => this.props.handleSubmit(this.state, 'users')}>
        <Segment stacked>
          <Form.Input fluid icon='user' name='username' iconPosition='left' placeholder='Username' onChange={this.handleChange}/>
          <Form.Input
            fluid
            onChange={this.handleChange}
            icon='lock'
            name='password'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Form.Input
            fluid
            placeholder='Tell us something about you'
            type='text-area'
          />

          <Button color='red' fluid size='large' >
            Sign Up!
          </Button>
        </Segment>
      </Form>
          </Modal.Content>
        </Modal>
      </Message>
    </Grid.Column>
  </Grid>

 
    )
  }


}

  export default Login