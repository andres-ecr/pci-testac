import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import data from './near-earth-asteroids.json';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const columnDefs: ColDef[] = [
  {
    field: 'designation',
    headerName: 'Designation',
    filter: 'agTextColumnFilter',
  },
  {
    field: 'discovery_date',
    headerName: 'Discovery Date',
    filter: 'agDateColumnFilter',
    valueFormatter: (params) => {
      const date = new Date(params.value);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      return `${month}-${day}-${year}`;
    },
  },
  {
    field: 'h_mag',
    headerName: 'H (mag)',
    valueParser: (params) => Number(params.newValue),
    filter: 'agNumberColumnFilter',
  },
  {
    field: 'moid_au',
    headerName: 'MOID (au)',
    valueParser: (params) => Number(params.newValue),
    filter: 'agNumberColumnFilter',
  },
  {
    field: 'q_au_1',
    headerName: 'q (au)',
    valueParser: (params) => Number(params.newValue),
    filter: 'agNumberColumnFilter',
  },
  {
    field: 'q_au_2',
    headerName: 'Q (au)',
    valueParser: (params) => Number(params.newValue),
    filter: 'agNumberColumnFilter',
  },
  {
    field: 'period_yr',
    headerName: 'Period (yr)',
    valueParser: (params) => Number(params.newValue),
    filter: 'agNumberColumnFilter',
  },
  {
    field: 'i_deg',
    headerName: 'Inclination (deg)',
    valueParser: (params) => Number(params.newValue),
    filter: 'agNumberColumnFilter',
  },
  {
    field: 'pha',
    headerName: 'Potentially Hazardous',
    filter: 'agTextColumnFilter',
    valueFormatter: (params) => {
      if (params.value === 'Y') {
        return 'Yes';
      } else if (params.value === 'N') {
        return 'No';
      } else {
        return '';
      }
    },
  },
  {
    field: 'orbit_class',
    headerName: 'Orbit Class',
    enableRowGroup: true,
    filter: 'agTextColumnFilter',
  },
];

const NeoGrid = (): JSX.Element => {
  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <h1>Near-Earth Object Overview</h1>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={'always'}
        defaultColDef={{
          sortable: true,
          sort: 'asc',
          filter: true,
        }}
      />
    </div>
  );
};

export default NeoGrid;
