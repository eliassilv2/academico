import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbArrowBack } from 'react-icons/tb'

const form = () => {

    const { push, query } = useRouter()
    const [professor, setProfessor] = useState({})
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {
            const professores = JSON.parse(window.localStorage.getItem('professores'))
            const professor = professores[query.id]

            for(let atributo in professor){
                setValue(atributo, professor[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const professores= JSON.parse(window.localStorage.getItem('professores')) || []
        professores.push(dados)
        window.localStorage.setItem('professores', JSON.stringify(professores))
        push('/professores')
    }

    return (
        <Pagina titulo='Professor'>

            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control type="number" {...register('cpf')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control type="number" {...register('matricula')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>Salário: </Form.Label>
                    <Form.Control type="text" {...register('salario')} />
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