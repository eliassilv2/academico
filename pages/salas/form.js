import Pagina from '@/components/Pagina'
import salaValidator from '@/validators/salaValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbArrowBack } from 'react-icons/tb'
import { mask } from 'remask'


const form = () => {


    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function salvar(dados) {
        const salas = JSON.parse(window.localStorage.getItem('salas')) || []
        salas.push(dados)
        window.localStorage.setItem('salas', JSON.stringify(salas))
        push('/salas')
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }

    return (
        <Pagina titulo='Salas'>


            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                        type="text"
                        {...register('nome', salaValidator.nome)}
                        placeholder='Seu nome aqui...' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="capacidade">
                    <Form.Label>Capacidade: </Form.Label>
                    <Form.Control
                        isInvalid={errors.capacidade}
                        mask='AAAAAAAAAAA'
                        maxLength={11} type="text"
                        {...register('capacidade', salaValidator.capacidade)}
                        onChange={handleChange}
                        placeholder='Capacidade...' />
                    {
                        errors.capacidade &&
                        <small className='mt-1'>{errors.capacidade.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>Tipo: </Form.Label>
                    <Form.Control
                        isInvalid={errors.tipo}
                        maxLength={10}
                        type="text"
                        {...register('tipo')}
                        placeholder='Tipo...'
                        onChange={handleChange} />
                    {
                        errors.tipo &&
                        <small className='mt-1'>{errors.tipo.message}</small>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>
                    <Link className='ms-2 btn btn-danger' href={'/salas'}>
                        <TbArrowBack className='me-2' />
                        Voltar
                    </Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form