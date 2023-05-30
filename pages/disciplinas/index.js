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
        getAll()
    }, [])

    function getAll(){
            axios.get('/api/disciplinas').then(resultados => {
                setDisciplinas(resultados.data);
            })
    }

    function excluir(id){
        axios.delete('/api/disciplinas/' + id)
        getAll()
    }

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
                        <th>Disciplina</th>
                        <th>Curso</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map((item, i) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/disciplinas/' + item.id}>
                                    <HiOutlinePencilAlt title='Alterar' className='text-primary' />
                                </Link>
                                {' '}
                                <BsTrash3 title='Excluir' onClick={() => excluir(item.id)} className='text-warning' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.curso}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index