import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbArrowBack } from 'react-icons/tb'
import { mask } from 'remask'
import semestreValidator from '@/validators/semsestreValidator'

const form = () => {


    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function salvar(dados) {
        const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
        semestres.push(dados)
        window.localStorage.setItem('semestres', JSON.stringify(semestres))
        push('/semestres')
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }

    return (
        <Pagina titulo='Semestres'>


            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                        type="text"
                        {...register('nome', semestreValidator.nome)}
                        placeholder='Seu nome aqui...' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dt_inicio">
                    <Form.Label>Data Inicio: </Form.Label>
                    <Form.Control
                        isInvalid={errors.dt_inicio}
                        mask='99/99/9999'
                        maxLength={10} type="text"
                        {...register('dt_inicio', semestreValidator.dt_inicio)}
                        onChange={handleChange}
                        placeholder='00/00/0000' />
                    {
                        errors.dt_inicio &&
                        <small className='mt-1'>{errors.dt_inicio.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="dt_fim">
                    <Form.Label>Data Final: </Form.Label>
                    <Form.Control
                        isInvalid={errors.dt_fim}
                        mask='99/99/9999'
                        maxLength={10}
                        type="text"
                        {...register('dt_fim', semestreValidator.dt_fim)}
                        placeholder='00/00/0000'
                        onChange={handleChange} />
                    {
                        errors.dt_fim &&
                        <small className='mt-1'>{errors.dt_fim.message}</small>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>
                    <Link className='ms-2 btn btn-danger' href={'/semestres'}>
                        <TbArrowBack className='me-2' />
                        Voltar
                    </Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form