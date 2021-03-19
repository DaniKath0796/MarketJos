import next from 'next'
import Link from 'next/link'
import styles from '../styles/categorias.module.css'

export default function Categorias({usenName}){
    return (
        <>
        <h1 className= {styles.h1}> Categoria {usenName}</h1>
        <Link href='/'>   Home
        </Link>
        </>
    )
}

