import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { TbArrowBack } from 'react-icons/tb'
import axios from 'axios'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            axios.get('/api/disciplinas/' + query.id).then(resultados => {
                const disciplina = resultados.data

                for(let atributo in disciplina){
                    setValue(atributo, disciplina[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/disciplinas/' + query.id, dados)
        push('/disciplinas')
    }

    return (
        <Pagina titulo="Disciplina">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Curso: </Form.Label>
                    <Form.Control type="text" {...register('duracao')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/disciplinas">
                        <TbArrowBack className='me-2' />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form
