import React from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Row, Col, Modal, ModalBody } from 'reactstrap';

const API_PATH = 'https://galacticblue.net/backup/api/contact/index.php';

class ContactForm extends React.Component {

	constructor() {
		super();
		this.state = {
			customerName: '',
			customerEmail: '',
			customerPhone: '',
			contactTime: '',
			contactMethod: '',
			message: '',
			mailSent: false,
			error: null,
			modal: false
		}

		this.handleContactTime = this.handleContactTime.bind(this);
		this.handleContactMethod = this.handleContactMethod.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	handleContactTime(e) {
		this.setState({
			contactTime: e.target.value
		});
	}

	handleContactMethod(e) {
		this.setState({
			contactMethod: e.target.value
		});
	}

	toggle() {
		this.setState(prevState => ({
		  modal: !prevState.modal
		}));
	}
	
	handleFormSubmit = e => {
		e.preventDefault();
		axios({
			method: 'post',
			url: `${API_PATH}`,
			headers: { 'content-type': 'application/json' },
			data: this.state
		  })
			.then(result => {
			  this.setState({
				mailSent: result.data.sent,
				modal: result.data.modal
			  });
			})
			.catch(error => this.setState({ error: error.message }));
	};

	render() {
		return (
			<Form className="form" onSubmit={e => this.handleFormSubmit(e)}>
				<Row>
					<Col md="6">
						<FormGroup>
							<Label for="customerName" className="display-5">Name</Label>
							<Input type="text" name="customerName" id="customerName" bsSize="lg" placeholder="Please Enter a Name" required value={this.state.customerName} onChange={e => this.setState({ customerName: e.target.value})} />
							<FormFeedback>Name is required to submit form</FormFeedback>
						</FormGroup>
					</Col>
					<Col md="6">
						<FormGroup>
							<Label for="customerEmail" className="display-5">Email</Label>
							<Input type="email" name="customerEmail" id="customerEmail" bsSize="lg" placeholder="Please Enter an Email" required value={this.state.customerEmail} onChange={e => this.setState({ customerEmail: e.target.value})} />
							<FormFeedback>Please enter a valid email address to submit form</FormFeedback>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<FormGroup>
							<Label for="customerPhone" className="display-5">Phone</Label>
							<Input type="phone" name="customerPhone" id="customerPhone" bsSize="lg" placeholder="Please Enter a Phone Number" value={this.state.customerPhone} onChange={e => this.setState({ customerPhone: e.target.value})} />
						</FormGroup>
						<h4 className="display-5">Preferred Time to Contact You?</h4>
						<FormGroup check>
							<Label check>
								<Input type="radio" name="timeRadio" value="day" checked={this.state.contactTime==='day'} onChange={this.handleContactTime} />{' '}
								&nbsp;&nbsp;<span className="display-5">Day</span>
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="radio" name="timeRadio" value="afternoon" checked={this.state.contactTime==='afternoon'} onChange={this.handleContactTime} />{' '}
								&nbsp;&nbsp;<span className="display-5">Afternoon</span>
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="radio" name="timeRadio" value="evening" checked={this.state.contactTime==='evening'} onChange={this.handleContactTime} />{' '}
								&nbsp;&nbsp;<span className="display-5">Evening</span>
							</Label>
						</FormGroup>
						<h4 className="display-5">Which Way Do You Prefer We Contact You?</h4>
						<FormGroup check>
							<Label check>
								<Input type="radio" name="contactRadio" value="email" checked={this.state.contactMethod==='email'} onChange={this.handleContactMethod} />{' '}
								&nbsp;&nbsp;<span className="display-5">Email</span>
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input type="radio" name="contactRadio" value="phone" checked={this.state.contactMethod==='phone'} onChange={this.handleContactMethod} />{' '}
								&nbsp;&nbsp;<span className="display-5">Phone</span>
							</Label>
						</FormGroup>
					</Col>
					<Col md="6">
						<FormGroup>
							<Label for="messageArea" className="display-5">Message</Label>
							<Input type="textarea" name="messageArea" id="messageArea" bsSize="lg" style={{height: '200px'}} placeholder="Please Leave a Message, a Comment, a Compliment, or a Suggestion" value={this.state.message} onChange={e => this.setState({ message: e.target.value})} />
						</FormGroup>
						<Button color="primary">Submit</Button>{' '}
					</Col>
				</Row>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalBody>
						<p className="display-5">Thank you for contacting us. You should hear back from us soon.</p>
					</ModalBody>
				</Modal>
				<div>
					{this.state.mailSent}
				</div>
			</Form>
		)
	}
}

export default ContactForm;
