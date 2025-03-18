import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Boot({xs1,xs2}) {
    return (
        <Row>

            <Col className='bg-danger' sm={12} md={6} xs={2}>
                jjj
            </Col>

            <Col className='bg-primary' sm={12} md={6} xs={10}>
                kk
            </Col>
        </Row>
    )
}

export default Boot