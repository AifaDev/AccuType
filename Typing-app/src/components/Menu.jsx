

export default function Menu({ ...props }) {
  return (
    <div {...props}>
      <MenuButton className='transform scale-[-1]'/>
    </div>
  );
}

const MenuButton = ({ ...props }) => (
  <svg {...props} height="48" width="48">
    <path d="M6 36v-3h26v3Zm33.9-2.6-9.45-9.45 9.4-9.4L42 16.7l-7.25 7.25 7.3 7.3ZM6 25.4v-3h20v3ZM6 15v-3h26v3Z" />
  </svg>
);
