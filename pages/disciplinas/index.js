import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai' 
import { BsTrash3 } from 'react-icons/bs'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import axios from 'axios'

const index = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        axios.get('/api/disciplinas').then(resultados => {
            setDisciplinas(resultados.data);
        })
    }, [])

    return (
        <Pagina titulo="Disciplinas">

            <Link href="/disciplinas/form" className='mb-2 btn btn-primary'>
            <AiOutlinePlus className='me-1' />
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Excluir</th>
                        <th>Nome</th>
                        <th>Duração</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/disciplinas/' + i}>
                                    <HiOutlinePencilAlt title='Alterar' className='text-primary' />
                                </Link>
                                {' '}
                                <BsTrash3 title='Excluir' onClick={() => excluir(i)} className='text-warning' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.duracao}</td>
                            <td>{item.modalidade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index