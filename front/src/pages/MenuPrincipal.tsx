import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';

import NoteAddIcon from '@mui/icons-material/NoteAdd';

import FindInPageIcon from '@mui/icons-material/FindInPage';

// import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';



import AgregarCurso from "../components/AgregarCurso";
import MostarCurso from "../components/MostarCurso";
import EditarCurso from "../components/EditarCurso";
import BorrarCursos from "../components/BorrarCursos";


const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Opciones ',
  },
  {
    segment: 'dashboard1',
    title: 'AgregarCurso',
    icon: <FindInPageIcon />,
  },
 
  {
    segment: 'dashboard2',
    title: 'MostarCurso',
    icon: <NoteAddIcon />,
  },
  {
    segment: 'dashboard3',
    title: 'EditarCurso',
    icon: <NoteAddIcon />,
  },
  {
    segment: 'dashboard4',
    title: 'BorrarCurso',
    icon: <NoteAddIcon />,
  },
  
  
  
  {
    kind: 'divider',
  },
  
//   {
//     segment: 'reports',
//     title: 'Reports',
//     icon: <BarChartIcon />,
//     children: [
//       {
//         segment: 'sales',
//         title: 'Sales',
//         icon: <DescriptionIcon />,
//       },
//       {
//         segment: 'traffic',
//         title: 'Traffic',
//         icon: <DescriptionIcon />,
//       },
//     ],
//   },
  
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-Asesor-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: "stretch",
        textAlign: 'center',
      }}
    >
        {(pathname == "/dashboard1") ? <AgregarCurso /> : null}
        {(pathname == "/dashboard2") ? <MostarCurso /> : null}
        {(pathname == "/dashboard3") ? <EditarCurso /> : null}
        {(pathname == "/dashboard4") ? <BorrarCursos /> : null}
        

      {/* <Typography>Dashboard content for {pathname}</Typography> */}
    </Box>
    
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
    document.title = 'Menu';
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        // logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: 'test',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}