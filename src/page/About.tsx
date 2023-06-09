import React from 'react'
import { Form } from 'react-bootstrap'
import { Navigation } from '../components/Navigation'

export default function About(){

    return(
        <div>
            <Navigation></Navigation>
            <h1>Владимир, 18 лет</h1>
            <Form className='center-block'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Моя почта</Form.Label>
                    <Form.Control type="email" value="breaz1@yandex.ru" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Чуток обо мне</Form.Label>
                </Form.Group>
            </Form>
        </div>
    )

}
