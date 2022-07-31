import {Button, Col, Container, Modal, Row} from "react-bootstrap"
import AuthenticationQR from "./AuthenticationQR"
import {Component} from "react"
import {AuthResponse} from "@gimly-blockchain/did-auth-siop-web-demo-shared"

/* This is a container dialog for the QR code component. It re emits the onSignInComplete callback.  */

export type AuthenticationModalProps = {
  show?: boolean
  onCloseClicked?: () => void
  onSignInComplete: (AuthResponse: AuthResponse) => void
}

interface AuthenticationModalState {
  authRequestCreated: boolean
}

export default class AuthenticationModal extends Component<AuthenticationModalProps, AuthenticationModalState> {

  private readonly scanText = "请用身份钱包扫码";
  private readonly authText = "请按身份钱包提示批准工作证内容出示请求";

  constructor(props: AuthenticationModalProps) {
    super(props)
    this.state = {authRequestCreated: false}
  }

  render() {
    return <Modal show={this.props.show} animation={false}>
      <Modal.Header style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Modal.Title>酒店入住登记</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <h6>{this.state.authRequestCreated ? this.authText : this.scanText}</h6>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center" style={{paddingTop: "10px"}}>
              <AuthenticationQR
                  onAuthRequestCreated={() => {
                    this.setState({authRequestCreated: true})
                  }}
                  onSignInComplete={(AuthResponse) =>
                      this.props.onSignInComplete(AuthResponse)}/>
            </Col>
          </Row>

        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>取消</Button>
      </Modal.Footer>
    </Modal>
  }

  private handleClose = () => {
    this.props.onCloseClicked?.()
  }
}
