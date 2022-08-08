export default function CheckIcon({ variant = 'default', ...options }) {
  return (
    <svg
      {...options}
      width='14'
      height='10'
      viewBox='0 0 14 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.1027 0L11.4839 0.624567C9.32432 2.83397 7.01254 5.36528 4.85462 7.59884L1.77461 5.01042L1.10829 4.44137L0 5.81541L0.673136 6.37751L4.37193 9.48647L4.97705 10L5.5414 9.43095C7.88034 7.03861 10.4181 4.23655 12.7214 1.88063L13.3333 1.24911L12.1027 0Z'
        fill={`${variant === 'default' ? '#FF4500' : '#93A4B4'}`}
      />
    </svg>
  );
}
