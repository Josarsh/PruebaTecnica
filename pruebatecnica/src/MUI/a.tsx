import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';

// Definimos la estructura de los datos según tu objeto `data`
interface Data {
  id: number;
  name: string;
  email: string;
  phone: string;
  companyName: string;
}

// CORREGIR AQUi para que ponga los datos de la api
const data: Data[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    companyName: 'Romaguera-Crona',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    companyName: 'Deckow-Crist',
  },
  // Agrega más datos según sea necesario
];

// Columnas que se mostrarán en la tabla
interface ColumnData {
  dataKey: keyof Data;
  label: string;
  width?: number;
}

const columns: ColumnData[] = [
  {
    width: 150,
    label: 'Nombre',
    dataKey: 'name',
  },
  {
    width: 200,
    label: 'Correo',
    dataKey: 'email',
  },
  {
    width: 150,
    label: 'Teléfono',
    dataKey: 'phone',
  },
  {
    width: 200,
    label: 'Empresa',
    dataKey: 'companyName',
  },
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
          sx={{ backgroundColor: 'background.paper', fontWeight: 'bold' }}
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
    <React.Fragment>
      {columns.map((column) => (
        <TableCell key={column.dataKey}>
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

// Componente principal
export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={data} // Usamos el array `data`
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}