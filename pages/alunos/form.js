import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbArrowBack } from 'react-icons/tb'
import alunoValidator from '@/validators/alunoValidator'

const form = () => {
    
    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
        alunos.push(dados)
        window.localStorage.setItem('alunos', JSON.stringify(alunos))
        push('/alunos')
    }

    
    return (
        <Pagina titulo='Aluno'>


            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', alunoValidator.nome)} />
                    {
                        errors.nome &&
                        <small className='mt-1'>{errors.nome.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control isInvalid={errors.cpf} type="number" {...register('cpf', alunoValidator.cpf)} />
                    {
                        errors.cpf &&
                        <small className='mt-1'>{errors.cpf.message}</small>    
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control isInvalid={errors.matricula} type="number" {...register('matricula', alunoValidator.matricula)} />
                    {
                        errors.matricula &&
                        <small className='mt-1'>{errors.matricula.message}</small>    
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register('email', alunoValidator.email)} />
                    {
                        errors.email &&
                        <small className='mt-1'>{errors.email.message}</small>    
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>
                    <Link className='ms-2 btn btn-danger' href={'/alunos'}>
                        <TbArrowBack className='me-2' />
                        Voltar
                    </Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form