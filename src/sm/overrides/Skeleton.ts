// ----------------------------------------------------------------------

export default function Skeleton() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background:
              'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) ',
          },
        },
      },
    },
  };
}
