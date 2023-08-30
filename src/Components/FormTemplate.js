
import { Container, Col, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import SectionTitle from '../Layouts/SectionTitle';
import FormInput from './FormInput';
import SubmitWithLoading from "./SubmitWithLoading"

export default function FormTemplate (props) {
    const { action, loading } = props
    const { title, fields, button } = props.form

    const { register, handleSubmit } = useForm();


    return (
        <Container fluid="lg">
            <Col md={6} className="mx-auto">
            <Form onSubmit={handleSubmit(action)}>
                <SectionTitle>{title}</SectionTitle>
                {fields.map((field) => 
                    <FormInput
                        key = {field.name}
                        type = {field.type}
                        name = {field.name}
                        label = {field.label}
                        placeholder = {field.placeholder}
                        register = {{...register(
                            field.name, 
                            {required: field.required, disabled: loading
                            })
                        }}
                    />

                )}
                                                   

                <div className='text-center pt-3'>
                    <SubmitWithLoading loading={loading} block>{button}</SubmitWithLoading>

                </div>

            </Form>
            </Col>
        </Container>
    )
}
