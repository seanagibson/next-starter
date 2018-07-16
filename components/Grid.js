export default ({
  children,
  gap = '10px',
  cols = '1fr',
  rows = '1fr',
  templateAreas = null,
  alignItems = 'center',
  justifyItems = 'center',
  ...props
}) => {
  const areas = templateAreas === null ? `` : `grid-template-areas: ${templateAreas}`;
  return (
    <div {...props}>
      {children}
      <style jsx>
        {`
          div {
            display: grid;
            grid-gap: ${gap};
            grid-template-columns: ${cols};
            grid-template-rows: ${rows};
            ${areas}
            align-items: ${alignItems};
            justify-items: ${justifyItems};
          }
        `}
      </style>
    </div>
  );
};
