// ----------------------------------------------------------------------

export default function Skeleton() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background:
              'linear-gradient(120deg,transparent,rgba(145, 158, 171, 0.5),transparent) ',
          },
        },
      },
    },
  };
}
