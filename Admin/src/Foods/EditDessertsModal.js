import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

export class EditDessertsModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('https://localhost:44365/api/desserts', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                DessertsId: event.target.DessertsId.value,
                DessertsName: event.target.DessertsName.value,
                Price: event.target.Price.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }



    render() {
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
                            Editoni
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="DessertsId">
                                        <Form.Label>Numri</Form.Label>
                                        <Form.Control type="text" name="DessertsId" required
                                            placeholder="Shtypni numrin"
                                            disabled
                                            defaultValue={this.props.dessertsid} />
                                    </Form.Group>

                                    <Form.Group controlId="DessertsName">
                                        <Form.Label>Emri i Ëmbëlsirave</Form.Label>
                                        <Form.Control type="text" name="DessertsName" required
                                            defaultValue={this.props.Dessertsname}
                                            placeholder="Shtypni emrin" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Çmimi</Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            defaultValue={this.props.price}
                                            placeholder="Shtypni çmimin" />
                                    </Form.Group>



                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Perditësoni
                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Mbyll</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}