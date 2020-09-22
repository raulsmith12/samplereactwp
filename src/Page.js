import React from 'react';
import ContactForm from "./components/Form";
import Footer from './components/Footer';
import { Container, Row, Col } from 'reactstrap';

export default function Page(props) {
    const { page } = props;
    let contactForm;
    if (page.slug === 'contact') {
        contactForm = <ContactForm />
    }
    return (
        <div className="page">
            <div className="page-header">
                <h1 className="page-title">{page.title.rendered}</h1>
            </div>
            <Container>
                <Row>
                    <Col className="col-10 offset-1">
                        <div className="page-content" dangerouslySetInnerHTML={{ __html: page.content.rendered }}/>
                        {contactForm}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
