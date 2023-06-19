import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'
import { HiOutlinePencilAlt } from 'react-icons/hi'

const index = () => {

    const [semestres, setSemestres] = useState([])

    useEffect(() => {
        setSemestres(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('semestres')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro? ')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('semestres', JSON.stringify(itens))
            setSemestres(itens)
        }
    }

    return (
        <Pagina titulo='Aluno'>

            <Link href="/semestres/form" className='mb-2 btn btn-primary'>
                <AiOutlinePlus className='me-1' />
                Novo
            </Link>
            <div>
                <Table responsive='sm' striped bordered hover >
                    <thead>
                        <tr>
                            <th>Excluir</th>
                            <th>Nome</th>
                            <th>Dt. Inicio</th>
                            <th>Dt. Fim</th>
                        </tr>
                    </thead> 

                    <tbody>
                        {semestres.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/semestres/' + i}>
                                        <HiOutlinePencilAlt title='Alterar' className='text-primary' />
                                    </Link>
                                    {' '}
                                    <BsTrash3 title='Excluir' onClick={() => excluir(i)} className='text-warning' />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.dt_inicio}</td>
                                <td>{item.dt_fim}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Pagina>
    );
}

export default index