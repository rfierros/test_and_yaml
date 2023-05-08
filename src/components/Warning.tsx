import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

interface AutohideErrorProps {
  description?: string;
  show: boolean;
  onHide: () => void;
}

export default function AutohideError(props: AutohideErrorProps) {

  return (
     <ToastContainer>
        <Toast bg-warning onClose={() => props.onHide()} show={props.show} delay={3500} autohide>
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>{props.description}</Toast.Body>
        </Toast>
    </ToastContainer>
  );
}
