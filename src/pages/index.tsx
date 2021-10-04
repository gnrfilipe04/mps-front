import type { NextPage } from 'next'
import Head from 'next/head'
import { HomePage } from '../components/NextPages/Home'
import { SnackBarCustom } from '../components/SnackBarCustom'
import { useSnackBar } from '../contexts/SnackBarContext'

const Home: NextPage = () => {
  const { isSuccess } = useSnackBar()

  return (
    <>
      <Head>
        <title>Agente MPS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <HomePage />
      {isSuccess ? (
        <SnackBarCustom message='Sucesso na operação' color='success' />
      ) : (
        <SnackBarCustom message='Operação inválida' color='error' />
      )}
    </>
  )
}

export default Home
