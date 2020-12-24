import React, { useEffect } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
// import PropTypes from 'prop-types';
import { } from './redux/hooks';

export default function Ideas() {
  return (
    <div className="my-ideas-ideas">
      <Container>
        <Row>
          <Col className='p-3 d-flex justify-content-between align-items-center'>
            <Button size='sm' color='primary' className='rounded pl-3 pr-3' >
              + New idea
            </Button>
            <div className='d-flex justify-content-between  align-items-center'>
              <span>Karma</span>
              <span>Credits</span>
              <Button color='outline-info' className='rounded pl-3 pr-3'>Get credits</Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md='3' sm='6'>
            <Card>
              <CardImg top width="100%" src={require('../../assets/img/318x180.svg')} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md='3'>
            <Card>
              <CardImg top width="100%" src={require('../../assets/img/318x180.svg')} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md='3'>
            <Card>
              <CardImg top width="100%" src={require('../../assets/img/318x180.svg')} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md='3'>
            <Card>
              <CardImg top width="100%" src={require('../../assets/img/318x180.svg')} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md='3'>
            <Card>
              <CardImg top width="100%" src={require('../../assets/img/318x180.svg')} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md='3'>
            <Card>
              <CardImg top width="100%" src={require('../../assets/img/318x180.svg')} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>


      </Container>

    </div>
  );
};

Ideas.propTypes = {};
Ideas.defaultProps = {};
