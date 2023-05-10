import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

interface WarningContentProps {
  delay: number,
  isOpen: boolean,
  title: string,
  message: string,
  type: string
}
interface WarningProps {
  body: WarningContentProps,
  onHide: () => void
}

export default function Warning(props:WarningProps) {


  return (
     <ToastContainer position="middle-center">
        <Toast bg={props.body.type} onClose={() => props.onHide()} show={props.body.isOpen} delay={props.body.delay} autohide>
          <Toast.Header>
            <strong className="me-auto">{props.body.title}</strong>
          </Toast.Header>
          <Toast.Body>{props.body.message}</Toast.Body>
        </Toast>
    </ToastContainer>
  );
}