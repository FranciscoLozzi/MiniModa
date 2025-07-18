import React, { useState } from 'react';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso!');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5548926354441', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contato@usezebra.com.br', '_blank');
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <div className="contact-header-content">
          <div className="header-icon">💬</div>
          <h1>Entre em Contato</h1>
          <p>Estamos aqui para ajudar! Entre em contato conosco através dos canais abaixo ou preencha o formulário e retornaremos o mais breve possível.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-main">
        <div className="contact-container">
          {/* Contact Info Section */}
          <div className="contact-info-section">
            <div className="info-card">
              <h2>
                <svg className="section-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Informações de Contato
              </h2>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="contact-item-content">
                  <h3>Telefone</h3>
                  <p>(48) 92635-4441</p>
                  <span>Segunda a Sexta, 9h às 18h</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-item-content">
                  <h3>E-mail</h3>
                  <p>contato@usezebra.com.br</p>
                  <span>Respondemos em até 24h</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="contact-item-content">
                  <h3>Endereço</h3>
                  <p>Florianópolis, SC</p>
                  <span>Atendimento presencial com agendamento</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div className="contact-item-content">
                  <h3>Horário de Atendimento</h3>
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <span>Sábado: 9h às 14h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="contact-form-section">
            <div className="form-card">
              <h2>
                <svg className="section-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                Envie sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nome *</label>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="(48) 99999-9999"
                      value={formData.telefone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Empresa</label>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Nome da empresa (opcional)"
                      value={formData.empresa}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Assunto *</label>
                  <input
                    type="text"
                    name="assunto"
                    placeholder="Qual o motivo do seu contato?"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Mensagem *</label>
                  <textarea
                    name="mensagem"
                    placeholder="Descreva sua dúvida ou solicitação..."
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  Enviar Mensagem
                </button>

                <p className="form-disclaimer">
                  * Campos obrigatórios. Seus dados estão protegidos e não serão compartilhados.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="quick-contact-section">
          <div className="quick-contact-container">
            <h2>Contato Rápido</h2>
            <div className="quick-contact-options">
              <div className="quick-contact-item" onClick={handleWhatsApp}>
                <div className="quick-contact-icon whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </div>
                <div className="quick-contact-content">
                  <h3>WhatsApp</h3>
                  <p>Clique para conversar</p>
                </div>
              </div>

              <div className="quick-contact-item" onClick={handleEmail}>
                <div className="quick-contact-icon email">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="quick-contact-content">
                  <h3>E-mail</h3>
                  <p>Envie sua mensagem</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="faq-container">
            <h2>Perguntas Frequentes</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Qual o prazo de entrega?</h3>
                <p>O prazo varia de acordo com sua localização. Geralmente entre 3 a 7 dias úteis.</p>
              </div>
              <div className="faq-item">
                <h3>Como acompanhar meu pedido?</h3>
                <p>Após a confirmação do pagamento, você receberá um código de rastreamento por e-mail.</p>
              </div>
              <div className="faq-item">
                <h3>Posso trocar ou devolver?</h3>
                <p>Sim! Você tem até 30 dias para trocas e devoluções, desde que o produto esteja em perfeitas condições.</p>
              </div>
              <div className="faq-item">
                <h3>Quais formas de pagamento aceitas?</h3>
                <p>Aceitamos cartões de crédito, débito, PIX e boleto bancário.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;