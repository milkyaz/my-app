import { useState } from "react";
import {
  useGeneratedHtmlId,
  EuiButton,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiText,
  EuiButtonEmpty
} from "@elastic/eui";
import { App } from "../App";

const ModalChangePassword = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);
  const modalTitleId = useGeneratedHtmlId();

  return (
    <>
      <EuiButton onClick={showModal}>
        <EuiText>Забыли пароль?</EuiText>
      </EuiButton>
      {isModalVisible && (
        <EuiModal
          className="modal__password"
          role="alertdialog"
          aria-labelledby={modalTitleId}
          onClose={closeModal}
        >
          <EuiModalBody>
            <App />
          </EuiModalBody>
          <EuiModalFooter></EuiModalFooter>
        </EuiModal>
      )}
    </>
  );
};

export default ModalChangePassword;
