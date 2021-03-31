import React from "react";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { FrameLoop } from "@react-spring/shared";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0, 2);
  background: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: relative;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0px;
  z-index: 10;
`;

const Modal = ({ showModal, setShowModal }) => {
  return (
    <div>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <p>
                Thank your for your message, we will get back to you as soon as
                possible
              </p>
            </ModalContent>
            <CloseModalButton
              arial-label="close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
};

export default Modal;
