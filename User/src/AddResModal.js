import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddResModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44365/api/restaurant',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //RestaurantId:null,
                RestaurantName:event.target.RestaurantName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Shtoni Restaurant
        </Modal.Title>
    </Modal.Header>

<table>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <th>
                    <Form.Group controlId="RestaurantName">
                        <Form.Label>Emri i Restaurantit</Form.Label>
                        <Form.Control type="text" name="RestaurantName" required 
                        placeholder="Shkruani Emrin"/>
                    </Form.Group>
</th>
<th>
                    <Form.Group controlId="RestaurantName">
                        <Form.Label>Emri i Restaurantit</Form.Label>
                        <Form.Control type="text" name="RestaurantName" required 
                        placeholder="Shkruani Emrin"/>
                    </Form.Group>
</th>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Shtoni Restaurant
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    </table>
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Mbyll</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}