import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbArrowBack } from 'react-icons/tb'
import alunoValidator from '@/validators/alunoValidator'
import { mask } from 'remask'

const form = () => {


    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function salvar(dados) {
        const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
        alunos.push(dados)
        window.localStorage.setItem('alunos', JSON.stringify(alunos))
        push('/alunos')
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }

    return (
        <Pagina titulo='Aluno'>


            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                        type="text"
                        {...register('nome', alunoValidator.nome)}
                        placeholder='Seu nome aqui...' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control
                        isInvalid={errors.cpf}
                        mask='999.999.999-99'
                        maxLength={14} type="text"
                        {...register('cpf', alunoValidator.cpf)}
                        onChange={handleChange}
                        placeholder='000.000.000-00' />
                    {
                        errors.cpf &&
                        <small className='mt-1'>{errors.cpf.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="dt_nascimento">
                    <Form.Label>Dt. Nascimento: </Form.Label>
                    <Form.Control
                        mask='99/99/9999'
                        type="text"
                        {...register('dt_nascimento')}
                        placeholder='00/00/0000'
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control
                        isInvalid={errors.matricula}
                        mask='999999'
                        maxLength={6} type="text"
                        {...register('matricula', alunoValidator.matricula)}
                        onChange={handleChange} />
                    {
                        errors.matricula &&
                        <small className='mt-1'>{errors.matricula.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        type="text"
                        {...register('email', alunoValidator.email)}
                        placeholder='@exemplo.com' />
                </Form.Group>


                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control
                        mask='99999-999'
                        type="text"
                        {...register('cep', alunoValidator.cep)}
                        onChange={handleChange} />
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