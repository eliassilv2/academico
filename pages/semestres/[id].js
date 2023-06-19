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
    const [semestre, setSemestres] = useState({})
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {
            const semestres = JSON.parse(window.localStorage.getItem('semestres'))
            const semestre = semestres[query.id]

            for(let atributo in semestre){
                setValue(atributo, semestre[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const semestres= JSON.parse(window.localStorage.getItem('semestres')) || []
        semestres.push(dados)
        window.localStorage.setItem('semestres', JSON.stringify(semestres))
        push('/semestres')
    }

    return (
        <Pagina titulo='Semestre'>

            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dt_inicio">
                    <Form.Label>Data Inicio: </Form.Label>
                    <Form.Control type="text" {...register('dt_inicio')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dt_fim">
                    <Form.Label>Data Fim: </Form.Label>
                    <Form.Control type="text" {...register('dt_fim')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>
                    <Link className='ms-2 btn btn-danger' href={'/semestre'}>
                        <TbArrowBack className='me-2' />
                        Voltar
                    </Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form