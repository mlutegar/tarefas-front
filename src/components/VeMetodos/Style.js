import styled, { keyframes } from 'styled-components';

// Animações
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Componente principal que engloba tudo
const VeMetodosStyle = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f3e8ff 0%, #dbeafe 100%);
`;

const Header = styled.div`
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const HeaderContent = styled.div`
  max-width: 448px;
  margin: 0 auto;
  padding: 24px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #1f2937;
    margin: 0 0 4px 0;
  }
  
  p {
    color: #6b7280;
    font-size: 14px;
    margin: 0;
  }
`;

const Counter = styled.div`
  background: #f3e8ff;
  border-radius: 50%;
  padding: 12px;
  font-weight: bold;
  font-size: 18px;
  color: #7c3aed;
  min-width: 48px;
  text-align: center;
`;

const Content = styled.div`
  max-width: 448px;
  margin: 0 auto;
  padding: 24px 16px 80px 16px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  }
`;

const CardHeader = styled.div`
  padding: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardContent = styled.div`
  flex: 1;
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 4px 0;
  }
  
  p {
    color: #6b7280;
    font-size: 14px;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const ChevronIcon = styled.div`
  margin-left: 16px;
  color: #9ca3af;
  transition: transform 0.3s ease;
  
  ${props => props.expanded && `
    transform: rotate(180deg);
  `}
`;

const ExpandedContent = styled.div`
  padding: 0 24px 24px 24px;
  border-top: 1px solid #f9fafb;
  
  h4 {
    font-weight: 500;
    color: #1f2937;
    margin: 16px 0 12px 0;
    font-size: 16px;
  }
  
  .description {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
    
    p {
      margin: 0 0 8px 0;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const EditButton = styled(ActionButton)`
  background: #f3f4f6;
  color: #374151;
  
  &:hover:not(:disabled) {
    background: #e5e7eb;
  }
`;

const DeleteButton = styled(ActionButton)`
  background: #fef2f2;
  color: #dc2626;
  
  &:hover:not(:disabled) {
    background: #fee2e2;
  }
`;

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const LoadingCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .spinner {
    width: 32px;
    height: 32px;
    color: #7c3aed;
    animation: ${spin} 1s linear infinite;
    margin-bottom: 16px;
  }
  
  p {
    color: #6b7280;
    font-size: 18px;
    margin: 0;
  }
`;

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const ErrorCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 384px;
  
  .error-icon {
    width: 64px;
    height: 64px;
    background: #fef2f2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    font-size: 24px;
  }
  
  h3 {
    font-size: 20px;
    font-weight: bold;
    color: #1f2937;
    margin: 0 0 8px 0;
  }
  
  p {
    color: #6b7280;
    margin: 0 0 16px 0;
  }
`;

const Button = styled.button`
  background: #7c3aed;
  color: white;
  padding: 8px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: #6d28d9;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 48px 0;
  
  .empty-icon {
    width: 80px;
    height: 80px;
    background: #f3f4f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    font-size: 32px;
  }
  
  h3 {
    font-size: 18px;
    font-weight: 500;
    color: #1f2937;
    margin: 0 0 8px 0;
  }
  
  p {
    color: #6b7280;
    font-size: 14px;
    margin: 0;
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: #7c3aed;
  color: white;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 24px;
  
  &:hover {
    background: #6d28d9;
    transform: scale(1.1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  
  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #1f2937;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1f2937;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const PrimaryButton = styled.button`
  flex: 1;
  background: #7c3aed;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: #6d28d9;
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

const SecondaryButton = styled.button`
  flex: 1;
  background: white;
  color: #374151;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }
`;

const SuccessMessage = styled.div`
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  
  p {
    color: #065f46;
    margin: 0;
    font-size: 14px;
  }
`;

const ErrorMessage = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  
  p {
    color: #dc2626;
    margin: 0;
    font-size: 14px;
  }
`;

const ConfirmModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 16px;
  animation: ${fadeIn} 0.3s ease;
`;

const ConfirmContent = styled.div`
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 350px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const ConfirmIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #fef2f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-size: 24px;
  color: #dc2626;
`;

const ConfirmTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 8px 0;
`;

const ConfirmText = styled.p`
  color: #6b7280;
  margin: 0 0 24px 0;
  font-size: 14px;
`;

const ConfirmButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const ConfirmButton = styled.button`
  flex: 1;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const CancelConfirmButton = styled(ConfirmButton)`
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
  
  &:hover:not(:disabled) {
    background: #f9fafb;
  }
`;

const DeleteConfirmButton = styled(ConfirmButton)`
  background: #dc2626;
  color: white;
  
  &:hover:not(:disabled) {
    background: #b91c1c;
  }
`;

export {
    VeMetodosStyle,
    Header,
    HeaderContent,
    HeaderTitle,
    Counter,
    Content,
    CardContainer,
    Card,
    CardHeader,
    CardContent,
    ChevronIcon,
    ExpandedContent,
    ActionButtons,
    ActionButton,
    EditButton,
    DeleteButton,
    LoadingContainer,
    LoadingCard,
    ErrorContainer,
    ErrorCard,
    Button,
    EmptyState,
    FloatingButton,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    CloseButton,
    Form,
    FormGroup,
    Label,
    Input,
    TextArea,
    ButtonGroup,
    PrimaryButton,
    SecondaryButton,
    SuccessMessage,
    ErrorMessage,
    ConfirmModal,
    ConfirmContent,
    ConfirmIcon,
    ConfirmTitle,
    ConfirmText,
    ConfirmButtons,
    ConfirmButton,
    CancelConfirmButton,
    DeleteConfirmButton
};