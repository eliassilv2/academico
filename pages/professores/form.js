import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbArrowBack } from 'react-icons/tb'
import profValidator from '@/validators/profValidator'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function salvar(dados) {
        const professores = JSON.parse(window.localStorage.getItem('professores')) || []
        professores.push(dados)
        window.localStorage.setItem('professores', JSON.stringify(professores))
        push('/professores')
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }

    return (
        <Pagina titulo='Professor'>


            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        {...register('nome', profValidator.nome)} 
                        placeholder='Seu nome aqui...'/>
                    {
                        errors.nome &&
                        <small className='mt-1'>{errors.nome.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control
                        isInvalid={errors.cpf}
                        mask='999.999.999-99'
                        maxLength={14} type="text"
                        {...register('cpf', profValidator.cpf)}
                        onChange={handleChange}
                        placeholder='000.000.000-00' />
                    {
                        errors.cpf &&
                        <small className='mt-1'>{errors.cpf.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control
                        isInvalid={errors.matricula}
                        mask='999999'
                        type="text"
                        {...register('matricula', profValidator.matricula)} 
                        onChange={handleChange}/>
                    {
                        errors.matricula &&
                        <small className='mt-1'>{errors.matricula.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>Salário: </Form.Label>
                    <Form.Control
                        isInvalid={errors.salario}
                        mask='9999,99'
                        type="text"
                        {...register('salario', profValidator.salario)} 
                        onChange={handleChange}/>
                    {
                        errors.salario &&
                        <small className='mt-1'>{errors.salario.message}</small>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>
                    <Link className='ms-2 btn btn-danger' href={'/professores'}>
                        <TbArrowBack className='me-2' />
                        Voltar
                    </Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form