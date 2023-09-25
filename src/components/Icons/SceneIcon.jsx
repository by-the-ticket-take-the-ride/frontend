function SceneIcon({ size }) {

  const typeScene = () => {

    switch (size) {
      case 'small':
        return (
          <svg 
            width='344.95'
            height='68.44'
            viewBox='0 0 346 69'
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="173" cy="34.2213" rx="172.475" ry="34.2213" fill="#D9D9D9"/>
          </svg>
        )
        case 'big':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" width="201" height="35" viewBox="0 0 201 35" fill="none">
              <ellipse cx="100.002" cy="17.5" rx="100" ry="17.5" fill="#D9D9D9"/>
            </svg>
          )
      default:
        return(
          <svg 
          width='344.95'
          height='68.44'
          viewBox='0 0 346 69'
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="173" cy="34.2213" rx="172.475" ry="34.2213" fill="#D9D9D9"/>
        </svg>
        )
  }
  }

  return typeScene();
}

export default SceneIcon;