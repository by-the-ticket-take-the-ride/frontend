function SceneIcon({
  width,
  height,
  rx,
  ry,
}) {
  return ( 
    <svg 
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="126" cy="25.5" rx={rx} ry={ry} fill='#D9D9D9'/>
    </svg>
  );
}

export default SceneIcon;