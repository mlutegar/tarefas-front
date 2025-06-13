import React, { useState, useEffect } from 'react';
import {
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
  CancelConfirmButton,
  DeleteConfirmButton
} from './Style';

const VeMetodos = () => {
  const [metodos, setMetodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ nome: '', descricao: '' });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);

  useEffect(() => {
    fetchMetodos();
  }, []);

  const fetchMetodos = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://atividades.fly.dev/api/metodos/');
      if (!response.ok) {
        throw new Error('Erro ao carregar métodos');
      }
      const data = await response.json();
      setMetodos(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const formatDescription = (description) => {
    return description.split('\r\n').map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
    ));
  };

  const openModal = () => {
    setShowModal(true);
    setFormData({ nome: '', descricao: '' });
    setSubmitError(null);
    setSubmitSuccess(false);
    setEditingId(null);
  };

  const openEditModal = (metodo) => {
    setShowModal(true);
    setFormData({ nome: metodo.nome, descricao: metodo.descricao });
    setSubmitError(null);
    setSubmitSuccess(false);
    setEditingId(metodo.id);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ nome: '', descricao: '' });
    setSubmitError(null);
    setSubmitSuccess(false);
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.descricao.trim()) {
      setSubmitError('Por favor, preencha todos os campos');
      return;
    }

    try {
      setSubmitLoading(true);
      setSubmitError(null);

      const url = editingId
          ? `https://atividades.fly.dev/api/metodos/${editingId}/`
          : 'https://atividades.fly.dev/api/metodos/';

      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome.trim(),
          descricao: formData.descricao.trim()
        })
      });

      if (!response.ok) {
        throw new Error(`Erro ao ${editingId ? 'atualizar' : 'salvar'} método`);
      }

      const metodoAtualizado = await response.json();

      if (editingId) {
        setMetodos(prev => prev.map(m => m.id === editingId ? metodoAtualizado : m));
      } else {
        setMetodos(prev => [...prev, metodoAtualizado]);
      }

      setSubmitSuccess(true);

      setTimeout(() => {
        closeModal();
      }, 1500);

    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowConfirmDelete(true);
  };

  const confirmDelete = async () => {
    try {
      setActionLoading(deleteId);

      const response = await fetch(`https://atividades.fly.dev/api/metodos/${deleteId}/`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar método');
      }

      setMetodos(prev => prev.filter(m => m.id !== deleteId));
      setShowConfirmDelete(false);
      setDeleteId(null);

    } catch (err) {
      alert(`Erro: ${err.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirmDelete(false);
    setDeleteId(null);
  };

  if (loading) {
    return (
        <VeMetodosStyle>
          <LoadingContainer>
            <LoadingCard>
              <div className="spinner">⟳</div>
              <p>Carregando métodos...</p>
            </LoadingCard>
          </LoadingContainer>
        </VeMetodosStyle>
    );
  }

  if (error) {
    return (
        <VeMetodosStyle>
          <ErrorContainer>
            <ErrorCard>
              <div className="error-icon">⚠️</div>
              <h3>Erro</h3>
              <p>{error}</p>
              <Button onClick={fetchMetodos}>
                Tentar novamente
              </Button>
            </ErrorCard>
          </ErrorContainer>
        </VeMetodosStyle>
    );
  }

  return (
      <VeMetodosStyle>
        <Header>
          <HeaderContent>
            <HeaderTitle>
              <h1>Ve Métodos</h1>
              <p>Métodos de produtividade</p>
            </HeaderTitle>
            <Counter>{metodos.length}</Counter>
          </HeaderContent>
        </Header>

        <Content>
          <CardContainer>
            {metodos.map((metodo) => (
                <Card key={metodo.id}>
                  <CardHeader onClick={() => toggleCard(metodo.id)}>
                    <CardContent>
                      <h3>{metodo.nome}</h3>
                      <p>
                        {metodo.descricao.substring(0, 80)}
                        {metodo.descricao.length > 80 ? '...' : ''}
                      </p>
                    </CardContent>
                    <ChevronIcon expanded={expandedCard === metodo.id}>
                      ↓
                    </ChevronIcon>
                  </CardHeader>

                  {expandedCard === metodo.id && (
                      <ExpandedContent>
                        <h4>Descrição completa:</h4>
                        <div className="description">
                          {formatDescription(metodo.descricao)}
                        </div>

                        <ActionButtons>
                          <EditButton
                              onClick={() => openEditModal(metodo)}
                              disabled={actionLoading === metodo.id}
                          >
                            ✏️ Editar
                          </EditButton>
                          <DeleteButton
                              onClick={() => handleDelete(metodo.id)}
                              disabled={actionLoading === metodo.id}
                          >
                            {actionLoading === metodo.id ? '⏳' : '🗑️'} Excluir
                          </DeleteButton>
                        </ActionButtons>
                      </ExpandedContent>
                  )}
                </Card>
            ))}
          </CardContainer>

          {metodos.length === 0 && (
              <EmptyState>
                <div className="empty-icon">📝</div>
                <h3>Nenhum método encontrado</h3>
                <p>Ainda não há métodos cadastrados no sistema.</p>
              </EmptyState>
          )}
        </Content>

        <FloatingButton onClick={openModal}>
          +
        </FloatingButton>

        {showModal && (
            <ModalOverlay onClick={(e) => e.target === e.currentTarget && closeModal()}>
              <ModalContent>
                <ModalHeader>
                  <h2>{editingId ? 'Editar Método' : 'Adicionar Novo Método'}</h2>
                  <CloseButton onClick={closeModal}>×</CloseButton>
                </ModalHeader>

                {submitSuccess && (
                    <SuccessMessage>
                      <p>✅ Método {editingId ? 'atualizado' : 'adicionado'} com sucesso!</p>
                    </SuccessMessage>
                )}

                {submitError && (
                    <ErrorMessage>
                      <p>{submitError}</p>
                    </ErrorMessage>
                )}

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="nome">Nome do Método</Label>
                    <Input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Ex: Método Pomodoro"
                        disabled={submitLoading}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="descricao">Descrição</Label>
                    <TextArea
                        id="descricao"
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleInputChange}
                        placeholder="Descreva como funciona este método de produtividade..."
                        disabled={submitLoading}
                    />
                  </FormGroup>

                  <ButtonGroup>
                    <SecondaryButton
                        type="button"
                        onClick={closeModal}
                        disabled={submitLoading}
                    >
                      Cancelar
                    </SecondaryButton>
                    <PrimaryButton
                        type="submit"
                        disabled={submitLoading || !formData.nome.trim() || !formData.descricao.trim()}
                    >
                      {submitLoading ? 'Salvando...' : (editingId ? 'Atualizar Método' : 'Adicionar Método')}
                    </PrimaryButton>
                  </ButtonGroup>
                </Form>
              </ModalContent>
            </ModalOverlay>
        )}

        {showConfirmDelete && (
            <ConfirmModal onClick={(e) => e.target === e.currentTarget && cancelDelete()}>
              <ConfirmContent>
                <ConfirmIcon>🗑️</ConfirmIcon>
                <ConfirmTitle>Excluir Método</ConfirmTitle>
                <ConfirmText>
                  Tem certeza que deseja excluir este método? Esta ação não pode ser desfeita.
                </ConfirmText>
                <ConfirmButtons>
                  <CancelConfirmButton
                      onClick={cancelDelete}
                      disabled={actionLoading === deleteId}
                  >
                    Cancelar
                  </CancelConfirmButton>
                  <DeleteConfirmButton
                      onClick={confirmDelete}
                      disabled={actionLoading === deleteId}
                  >
                    {actionLoading === deleteId ? 'Excluindo...' : 'Excluir'}
                  </DeleteConfirmButton>
                </ConfirmButtons>
              </ConfirmContent>
            </ConfirmModal>
        )}
      </VeMetodosStyle>
  );
};

export default VeMetodos;