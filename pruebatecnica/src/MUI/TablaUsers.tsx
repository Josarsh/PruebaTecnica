import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import { useGetUsersQuery } from '@/redux/services/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/redux/store";
import { changeUser } from '@/redux/features/UserBuscar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// Definimos la estructura de los datos
interface Data {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Configuración de las columnas que se mostrarán en la tabla
interface ColumnData {
  dataKey: string;
  label: string;
  width?: number;
}

const columns: ColumnData[] = [
  { width: 150, label: 'Name', dataKey: 'name' },
  { width: 200, label: 'Email', dataKey: 'email' },
  { width: 150, label: 'Phone', dataKey: 'phone' },
  { width: 200, label: 'Company', dataKey: 'company.name' },
];

// Componentes personalizados para Virtuoso
const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

// Cabecera de la tabla
function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          style={{ width: column.width }}
          sx={{ backgroundColor: 'primary.main', fontWeight: 'bold',color:'white' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

// Contenido de cada fila
function rowContent(_index: number, row: Data) {
  return (
    //se obtiene los datos a partir de la variable row que tiene el valor data
    <>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.email}</TableCell>
      <TableCell>{row.phone}</TableCell>
      <TableCell>{row.company.name}</TableCell>
    </>
  );
}

// Componente principal
const TablaUsers = () => {
  //Dispatch para desplegar funciones
  const dispatch = useDispatch()
  //Obtener usuario inicial
  const user = useSelector((state: RootState) => state.user)
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);
  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>An error occurred while fetching data.</p>;
  if (!data) return <p>No data available.</p>;

  const searcher = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Modificar el estadode usuario
    dispatch(changeUser(e.target.value))
    console.log(e.target.value)
  }
  let resultado = !user ? data : data?.filter((dato) => dato.name.toLowerCase().includes(user.toLocaleLowerCase()))
  return (
    <Box
      sx={{
        padding:1,
        display: "flex",
        flexDirection: "column", 
        gap: 1,
      }}
    >
      <Box
        component="form"
        sx={{
          width: "100%",
          maxWidth: 400,
          marginBottom: 1,
          '& .MuiTextField-root': { width: "100%" },
          margin: "left",
          '@media (max-width: 600px)': {
            maxWidth: "100%",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <TextField
            id="filled-search"
            label="Buscar Nombre"
            type="search"
            variant="standard"
            value={user}
            onChange={searcher}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              
            }}
          />
        </Box>
      </Box>
      <Paper
        sx={{
          height: 450,
          width: "100%",
          '@media (max-width: 600px)': {
            height: 400,
          },
        }}
      >
        <TableVirtuoso
          data={resultado}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </Paper>
    </Box>
  );
}

export default TablaUsers
