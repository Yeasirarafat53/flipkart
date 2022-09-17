export default function MessageBox(props) {
  return (
    <div className="alert alert-danger" role="alert">
      {props.children}
    </div>
  );
}


//   /* <Alert variant={props.variant || 'info'}>{props.children}</Alert>; */

