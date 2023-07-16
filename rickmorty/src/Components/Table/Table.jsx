import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 220 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'gender', headerName: 'Gender', width: 130 },
  { field: 'species', headerName: 'Species', width: 130 },
  { field: 'type', headerName: 'Type', width: 130 },
];

export default function Table({characters}) {

  return (
    <div style={{ height: '60vh', width: '100%' }}>
      <DataGrid
        rows={characters}
        columns={columns}
        pageSizeOptions={[0,0,0]}
      />
    </div>
  );
}