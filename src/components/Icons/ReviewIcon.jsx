function ReviewIcon({
  disabled = true
}) {
  const isActive = disabled ? 'rgba(154, 154, 154, 1)' : '#8B52F6';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.32928 4.32812H18.671C19.4078 4.32812 20.0051 4.92545 20.0051 5.66229V14.6679C20.0051 15.4048 19.4078 16.0021 18.671 16.0021H12.2082L8.04365 18.8859C7.83957 19.0271 7.57397 19.0433 7.35421 18.9281C7.13444 18.8128 6.99683 18.585 6.99699 18.3369V16.0021H5.32928C4.97893 16.0105 4.63996 15.8774 4.38891 15.6329C4.13786 15.3884 3.99591 15.0531 3.99512 14.7026V5.66229C3.99512 4.92545 4.59244 4.32812 5.32928 4.32812ZM18.5042 14.6679C18.5963 14.6679 18.6709 14.5933 18.6709 14.5011V5.82906C18.6709 5.73696 18.5963 5.66229 18.5042 5.66229H5.49605C5.40395 5.66229 5.32928 5.73696 5.32928 5.82906V14.5011C5.32928 14.5933 5.40395 14.6679 5.49605 14.6679H7.66408C8.0325 14.6679 8.33116 14.9666 8.33116 15.335V17.0634L11.6205 14.7867C11.7321 14.7094 11.8645 14.668 12.0001 14.6679H18.5042ZM7.99762 9.33125H16.0026C16.371 9.33125 16.6697 9.03259 16.6697 8.66417C16.6697 8.29575 16.371 7.99708 16.0026 7.99708H7.99762C7.6292 7.99708 7.33053 8.29575 7.33053 8.66417C7.33053 9.03259 7.6292 9.33125 7.99762 9.33125ZM16.0026 12.3331H7.99762C7.6292 12.3331 7.33053 12.0345 7.33053 11.666C7.33053 11.2976 7.6292 10.999 7.99762 10.999H16.0026C16.371 10.999 16.6697 11.2976 16.6697 11.666C16.6697 12.0345 16.371 12.3331 16.0026 12.3331Z"
        fill={isActive}
      />
      <mask
        id="mask0_2527_32918"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="3"
        y="4"
        width="18"
        height="16"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.32928 4.32812H18.671C19.4078 4.32812 20.0051 4.92545 20.0051 5.66229V14.6679C20.0051 15.4048 19.4078 16.0021 18.671 16.0021H12.2082L8.04365 18.8859C7.83957 19.0271 7.57397 19.0433 7.35421 18.9281C7.13444 18.8128 6.99683 18.585 6.99699 18.3369V16.0021H5.32928C4.97893 16.0105 4.63996 15.8774 4.38891 15.6329C4.13786 15.3884 3.99591 15.0531 3.99512 14.7026V5.66229C3.99512 4.92545 4.59244 4.32812 5.32928 4.32812ZM18.5042 14.6679C18.5963 14.6679 18.6709 14.5933 18.6709 14.5011V5.82906C18.6709 5.73696 18.5963 5.66229 18.5042 5.66229H5.49605C5.40395 5.66229 5.32928 5.73696 5.32928 5.82906V14.5011C5.32928 14.5933 5.40395 14.6679 5.49605 14.6679H7.66408C8.0325 14.6679 8.33116 14.9666 8.33116 15.335V17.0634L11.6205 14.7867C11.7321 14.7094 11.8645 14.668 12.0001 14.6679H18.5042ZM7.99762 9.33125H16.0026C16.371 9.33125 16.6697 9.03259 16.6697 8.66417C16.6697 8.29575 16.371 7.99708 16.0026 7.99708H7.99762C7.6292 7.99708 7.33053 8.29575 7.33053 8.66417C7.33053 9.03259 7.6292 9.33125 7.99762 9.33125ZM16.0026 12.3331H7.99762C7.6292 12.3331 7.33053 12.0345 7.33053 11.666C7.33053 11.2976 7.6292 10.999 7.99762 10.999H16.0026C16.371 10.999 16.6697 11.2976 16.6697 11.666C16.6697 12.0345 16.371 12.3331 16.0026 12.3331Z"
          fill={isActive}
        />
      </mask>
      <g mask="url(#mask0_2527_32918)"></g>
    </svg>
  );
}

export default ReviewIcon;
