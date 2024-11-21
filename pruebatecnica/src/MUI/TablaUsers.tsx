'use client'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useGetUsersQuery} from "@/redux/services/api";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser } from '@/redux/features/UserBuscar';
import { RootState } from "@/redux/store";

const TablaUsers = () => {
  //Dispatch para desplegar funciones
  const dispatch= useDispatch()
  //Obtener usuario inicial
  const user= useSelector((state:RootState)=> state.user)
  //Analiza si hay error en cargar datos de la base
  const {data,error,isLoading,isFetching} =useGetUsersQuery(null)
  if (isLoading||isFetching) return <p>Cargando...</p>;
  if (error) return <p>Ocurrio un error</p>;
  //Proceso de filtrado
  
  const searcher=(e: React.ChangeEvent<HTMLInputElement>)=>{
    //Modificar el estadode usuario
    dispatch(changeUser(e.target.value))
    console.log(e.target.value)
  }
  let resultado=!user? data: data?.filter((dato)=>dato.name.toLowerCase().includes(user.toLocaleLowerCase()))

  return (
    <div>
      <Box
      component="form"
        sx={{
          width: "100%",
          maxWidth: 400,
          marginBottom: 2,
          '& .MuiTextField-root': { width: "100%" },
        }}
        noValidate
        autoComplete="off"
    >
      <div>
        <TextField
          id="filled-search"
          label="Buscar Nombre"
          type="search"
          variant="filled"
          value={user}
          onChange={searcher}
        />
         </div>
         </Box>
    <TableContainer component={Paper} sx={{
          width: "100%",
          maxWidth: 1200,
          overflowX: "auto",
        }}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Correo</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Nombre de la empresa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultado?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.company.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default TablaUsers
