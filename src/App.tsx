import { useState } from 'react';
import italo from './assets/imagens/italo.jpeg';
import tessat from './assets/imagens/tessat.webp';
import ufma from './assets/imagens/ufma.jpg';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const scrollToSection = (s: string) => {
    document.getElementById(s)?.scrollIntoView({behavior: 'smooth'});
    setIsMenuOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const enviarMensagem = (event: React.FormEvent) => {
    event.preventDefault();
    
    const nome = formData.name;
    const mensagem = `Assunto: ${formData.subject}\nMensagem: ${formData.message}\nEmail: ${formData.email}`;
    const telefone = '5599991866408';
    const texto = `Olá, me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}/?text=${msgFormatada}`;
    
    window.open(url, '_blank');
    setFormData({name: '', email: '', subject: '', message: ''});
  };

  return (
    <div className="landing-page">
      <style>{`*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#0a0a0a;color:#fff;overflow-x:hidden}.landing-page{min-height:100vh;background:linear-gradient(135deg,#0a0a0a 0%,#1a1a1a 100%)}.header{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(10,10,10,0.95);backdrop-filter:blur(20px);border-bottom:1px solid rgba(139,92,246,0.2);padding:1rem 0}.header-container{max-width:1200px;margin:0 auto;padding:0 2rem;display:flex;justify-content:space-between;align-items:center}.logo{font-size:1.8rem;font-weight:bold;background:linear-gradient(45deg,#8b5cf6,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-shadow:0 0 20px rgba(139,92,246,0.5)}.nav{display:flex;gap:2rem}.nav-item{color:#fff;text-decoration:none;transition:all .3s ease;position:relative;cursor:pointer}.nav-item:hover{color:#8b5cf6}.nav-item::after{content:'';position:absolute;bottom:-5px;left:0;width:0;height:2px;background:linear-gradient(45deg,#8b5cf6,#3b82f6);transition:width .3s ease}.nav-item:hover::after{width:100%}.mobile-menu-btn{display:none;background:none;border:none;color:#fff;font-size:1.5rem;cursor:pointer}.mobile-nav{display:none;position:absolute;top:100%;left:0;right:0;background:rgba(10,10,10,0.98);backdrop-filter:blur(20px);border-top:1px solid rgba(139,92,246,0.2);padding:2rem}.mobile-nav.open{display:block}.mobile-nav-item{display:block;color:#fff;text-decoration:none;padding:1rem 0;border-bottom:1px solid rgba(139,92,246,0.1);cursor:pointer}.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}.hero::before{content:'';position:absolute;top:25%;left:25%;width:400px;height:400px;background:radial-gradient(circle,rgba(139,92,246,0.3) 0%,transparent 70%);border-radius:50%;animation:float 6s ease-in-out infinite}.hero::after{content:'';position:absolute;bottom:25%;right:25%;width:400px;height:400px;background:radial-gradient(circle,rgba(59,130,246,0.3) 0%,transparent 70%);border-radius:50%;animation:float 6s ease-in-out infinite reverse}.hero-content{text-align:center;max-width:800px;padding:0 2rem;z-index:10;position:relative}.hero-title{font-size:4rem;font-weight:bold;margin-bottom:2rem;background:linear-gradient(45deg,#8b5cf6,#3b82f6,#06b6d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:fadeInUp 1s ease-out}.hero-subtitle{font-size:1.5rem;color:#a0a0a0;margin-bottom:3rem;line-height:1.6;animation:fadeInUp 1s ease-out .2s both}.hero-buttons{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:3rem;animation:fadeInUp 1s ease-out .4s both}.btn-primary{padding:1rem 2rem;background:linear-gradient(45deg,#8b5cf6,#3b82f6);color:#fff;border:none;border-radius:50px;font-size:1.1rem;cursor:pointer;transition:all .3s ease;text-decoration:none;display:inline-block}.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 25px rgba(139,92,246,0.4)}.btn-secondary{padding:1rem 2rem;background:transparent;color:#fff;border:2px solid rgba(139,92,246,0.5);border-radius:50px;font-size:1.1rem;cursor:pointer;transition:all .3s ease;text-decoration:none;display:inline-block}.btn-secondary:hover{background:rgba(139,92,246,0.1);transform:translateY(-2px)}.social-links{display:flex;justify-content:center;gap:2rem;margin-bottom:3rem}.social-link{color:#a0a0a0;font-size:1.5rem;transition:all .3s ease}.social-link:hover{color:#8b5cf6;transform:translateY(-2px)}.scroll-indicator{position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);animation:bounce 2s infinite;cursor:pointer}.about{padding:5rem 2rem;max-width:1200px;margin:0 auto}.section-title{text-align:center;font-size:3rem;font-weight:bold;margin-bottom:3rem;background:linear-gradient(45deg,#8b5cf6,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.about-content{display:grid;grid-template-columns:1fr 1fr;gap:3rem;margin-bottom:4rem;align-items:center}.about-text{font-size:1.1rem;line-height:1.8;color:#a0a0a0}.about-image{width:100%;height:400px;border-radius:20px;overflow:hidden;box-shadow:0 20px 40px rgba(139,92,246,0.2);position:relative}.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem}.feature-card{background:rgba(139,92,246,0.1);padding:2rem;border-radius:20px;border:1px solid rgba(139,92,246,0.2);transition:all .3s ease}.feature-card:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(139,92,246,0.2)}.feature-icon{font-size:2rem;color:#8b5cf6;margin-bottom:1rem}.feature-title{font-size:1.3rem;font-weight:bold;margin-bottom:1rem}.feature-description{color:#a0a0a0;line-height:1.6}.career{padding:5rem 2rem;background:rgba(139,92,246,0.05)}.career-container{max-width:1000px;margin:0 auto}.timeline{position:relative;padding-left:3rem}.timeline::before{content:'';position:absolute;left:1rem;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,#8b5cf6,#3b82f6)}.timeline-item{position:relative;margin-bottom:3rem;background:rgba(10,10,10,0.8);padding:2rem;border-radius:20px;border:1px solid rgba(139,92,246,0.2)}.timeline-item::before{content:'';position:absolute;left:-2.5rem;top:2rem;width:1rem;height:1rem;background:linear-gradient(45deg,#8b5cf6,#3b82f6);border-radius:50%;border:3px solid #0a0a0a}.job-title{font-size:1.3rem;font-weight:bold;color:#8b5cf6;margin-bottom:.5rem}.company{font-size:1.1rem;color:#3b82f6;margin-bottom:.5rem}.job-period{color:#a0a0a0;margin-bottom:1rem}.job-description{color:#a0a0a0;line-height:1.6;margin-bottom:1rem}.tech-tags{display:flex;flex-wrap:wrap;gap:.5rem}.tech-tag{background:rgba(139,92,246,0.2);color:#8b5cf6;padding:.3rem .8rem;border-radius:20px;font-size:.9rem;border:1px solid rgba(139,92,246,0.3)}.portfolio{padding:5rem 2rem}.portfolio-container{max-width:1200px;margin:0 auto}.portfolio-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}.project-card{background:rgba(10,10,10,0.8);border-radius:20px;overflow:hidden;border:1px solid rgba(139,92,246,0.2);transition:all .3s ease}.project-card:hover{transform:translateY(-10px);box-shadow:0 20px 40px rgba(139,92,246,0.3)}.project-image{width:100%;height:200px;display:flex;align-items:center;justify-content:center;font-size:3rem;position:relative;overflow:hidden}.project-image img{width:100%;height:100%;object-fit:cover}.project-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;gap:1rem;opacity:0;transition:opacity .3s ease}.project-card:hover .project-overlay{opacity:1}.project-link{padding:.5rem 1rem;background:rgba(139,92,246,0.2);color:#8b5cf6;border:1px solid rgba(139,92,246,0.5);border-radius:20px;text-decoration:none;transition:all .3s ease}.project-link:hover{background:rgba(139,92,246,0.4)}.project-content{padding:2rem}.project-title{font-size:1.3rem;font-weight:bold;margin-bottom:1rem;color:#8b5cf6}.project-description{color:#a0a0a0;line-height:1.6;margin-bottom:1rem}.contact{padding:5rem 2rem;background:rgba(139,92,246,0.05)}.contact-container{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem}.contact-info{display:flex;flex-direction:column;gap:2rem}.contact-item{display:flex;align-items:center;gap:1rem;padding:1rem;background:rgba(139,92,246,0.1);border-radius:15px;border:1px solid rgba(139,92,246,0.2)}.contact-icon{width:50px;height:50px;background:rgba(139,92,246,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;color:#8b5cf6}.contact-form{display:flex;flex-direction:column;gap:1.5rem}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.form-group{display:flex;flex-direction:column;gap:.5rem}.form-label{color:#fff;font-weight:500}.form-input,.form-textarea{padding:1rem;background:rgba(0,0,0,0.5);border:1px solid rgba(139,92,246,0.3);border-radius:10px;color:#fff;font-size:1rem;transition:all .3s ease}.form-input:focus,.form-textarea:focus{outline:none;border-color:#8b5cf6;box-shadow:0 0 0 2px rgba(139,92,246,0.2)}.form-textarea{resize:vertical;min-height:120px}.form-submit{padding:1rem 2rem;background:linear-gradient(45deg,#8b5cf6,#3b82f6);color:#fff;border:none;border-radius:10px;font-size:1.1rem;cursor:pointer;transition:all .3s ease}.form-submit:hover{transform:translateY(-2px);box-shadow:0 10px 25px rgba(139,92,246,0.4)}.footer{background:#0a0a0a;border-top:1px solid rgba(139,92,246,0.2);padding:3rem 2rem 2rem}.footer-container{max-width:1200px;margin:0 auto}.footer-content{display:grid;grid-template-columns:2fr 1fr 1fr;gap:3rem;margin-bottom:2rem}.footer-brand{font-size:1.5rem;font-weight:bold;color:#8b5cf6;margin-bottom:1rem}.footer-description{color:#a0a0a0;line-height:1.6;margin-bottom:1rem}.footer-social{display:flex;gap:1rem}.footer-social-link{width:40px;height:40px;background:rgba(139,92,246,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#8b5cf6;text-decoration:none;transition:all .3s ease}.footer-social-link:hover{background:rgba(139,92,246,0.4);transform:translateY(-2px)}.footer-section h4{color:#fff;margin-bottom:1rem}.footer-section ul{list-style:none}.footer-section li{margin-bottom:.5rem}.footer-section a{color:#a0a0a0;text-decoration:none;transition:color .3s ease}.footer-section a:hover{color:#8b5cf6}.footer-bottom{border-top:1px solid rgba(139,92,246,0.2);padding-top:2rem;display:flex;justify-content:space-between;align-items:center;color:#a0a0a0}.footer-love{display:flex;align-items:center;gap:.5rem}.heart{color:#ec4899}@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes bounce{0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}@media (max-width:768px){.nav{display:none}.mobile-menu-btn{display:block}.hero-title{font-size:2.5rem}.hero-subtitle{font-size:1.2rem}.hero-buttons{flex-direction:column;align-items:center}.about-content{grid-template-columns:1fr}.about-image{height:300px;margin-top:2rem}.features{grid-template-columns:1fr}.timeline{padding-left:2rem}.timeline::before{left:.5rem}.timeline-item::before{left:-1.5rem}.portfolio-grid{grid-template-columns:1fr}.contact-container{grid-template-columns:1fr}.form-row{grid-template-columns:1fr}.footer-content{grid-template-columns:1fr;text-align:center}.footer-bottom{flex-direction:column;gap:1rem;text-align:center}}`}</style>

      <header className="header">
        <div className="header-container">
          <div className="logo">Italo Herênio</div>
          <nav className="nav">
            <span className="nav-item" onClick={()=>scrollToSection('sobre')}>Sobre</span>
            <span className="nav-item" onClick={()=>scrollToSection('carreira')}>Carreira</span>
            <span className="nav-item" onClick={()=>scrollToSection('portfolio')}>Portfolio</span>
            <span className="nav-item" onClick={()=>scrollToSection('contato')}>Contato</span>
          </nav>
          <button className="mobile-menu-btn" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen?'✕':'☰'}
          </button>
          <nav className={`mobile-nav ${isMenuOpen?'open':''}`}>
            <span className="mobile-nav-item" onClick={()=>scrollToSection('sobre')}>Sobre</span>
            <span className="mobile-nav-item" onClick={()=>scrollToSection('carreira')}>Carreira</span>
            <span className="mobile-nav-item" onClick={()=>scrollToSection('portfolio')}>Portfolio</span>
            <span className="mobile-nav-item" onClick={()=>scrollToSection('contato')}>Contato</span>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Italo Herênio</h1>
          <p className="hero-subtitle">Educador e empreendedor apaixonado por transformar vidas através do ensino de matemática e do desenvolvimento pessoal</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={()=>scrollToSection('portfolio')}>Conheça Meu Trabalho</button>
            <button className="btn-secondary" onClick={()=>scrollToSection('contato')}>Agende uma Aula</button>
          </div>
        </div>
        <div className="scroll-indicator" onClick={()=>scrollToSection('sobre')}>⬇️</div>
      </section>

      <section id="sobre" className="about">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
            <h3 style={{color:'#8b5cf6',marginBottom:'1rem',fontSize:'1.5rem'}}>Minha Jornada</h3>
            <p style={{marginBottom:'1rem'}}>Meu nome é Ítalo Herênio, tenho 24 anos, sou proprietário do Tessat Edu e professor de matemática. Leciono há mais de quatro anos, e durante esse tempo, descobri minha verdadeira paixão por ensinar e transformar a vida dos meus alunos por meio da educação.</p>
            <p style={{marginBottom:'1rem'}}>Atualmente, além de ministrar aulas, estuo cursando Direito na UFMA, onde busco expandir meus conhecimentos e agregar ainda mais valor à minha trajetória profissional e pessoal. Conciliar o ensino com a faculdade tem sido um desafio gratificante, pois acredito que a educação é a chave para o crescimento e a mudança social.</p>
            <p>No Tessat Edu, meu objetivo é oferecer uma educação de qualidade, acessível e moderna, ajudando estudantes a superarem suas dificuldades e a alcançarem seus objetivos acadêmicos. Acredito no poder da dedicação, da disciplina e, principalmente, no impacto que um bom professor pode ter na vida de alguém.</p>
          </div>
          <div className="about-image">
            <img 
              src={italo} 
              alt="Italo Hereneio" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px'
              }}
            />
          </div>
        </div>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3 className="feature-title">Metodologia</h3>
            <p className="feature-description">Abordagem personalizada que se adapta ao ritmo e necessidades de cada aluno, garantindo aprendizado eficaz.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3 className="feature-title">Raciocínio Lógico</h3>
            <p className="feature-description">Desenvolvimento do pensamento crítico e habilidades de resolução de problemas que vão além da matemática.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Foco em Resultados</h3>
            <p className="feature-description">Preparação direcionada para vestibulares e ENEM com alto índice de aprovação em universidades.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3 className="feature-title">Inovação</h3>
            <p className="feature-description">Uso de tecnologias educacionais e metodologias ativas para tornar o aprendizado mais dinâmico.</p>
          </div>
        </div>
      </section>

      <section id="carreira" className="career">
        <div className="career-container">
          <h2 className="section-title">Minha Carreira</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3 className="job-title">Ceo Tessat edu</h3>
              <h4 className="company">Tessat Edu</h4>
              <p className="job-period">2020 - Presente • Imperatriz, MA</p>
              <p className="job-description">Atuo no ensino de matemática com foco em raciocínio lógico e resolução de problemas. Responsável pela criação de metodologias personalizadas, gestão de turmas e desenvolvimento de estratégias educacionais para melhorar o desempenho dos alunos.</p>
              <div className="tech-tags">
                <span className="tech-tag">Raciocínio Lógico</span>
                <span className="tech-tag">Didática de Ensino</span>
                <span className="tech-tag">Preparação ENEM e Vestibulares</span>
                <span className="tech-tag">Tecnologias Educacionais</span>
              </div>
            </div>
            <div className="timeline-item">
              <h3 className="job-title">Professor de Matemática</h3>
              <h4 className="company">Instituições e Aulas Particulares</h4>
              <p className="job-period">2018 - 2022 • Imperatriz, MA</p>
              <p className="job-description">Ministrei aulas para alunos do ensino fundamental, médio e pré-vestibular. Foco no aprendizado prático, reforço escolar e desenvolvimento do raciocínio lógico com métodos acessíveis e personalizados.</p>
              <div className="tech-tags">
                <span className="tech-tag">Geometria e Álgebra</span>
                <span className="tech-tag">Avaliação de Desempenho</span>
                <span className="tech-tag">Matemática Básica e Avançada</span>
              </div>
            </div>
            <div className="timeline-item">
              <h3 className="job-title">Aluno UFMA</h3>
              <h4 className="company">Aulas Particulares e Projetos Educacionais</h4>
              <p className="job-period">2019 - 2020 • Imperatriz, MA</p>
              <p className="job-description">Desenvolvi materiais didáticos e estratégias de ensino para turmas de diferentes níveis. Atuei com foco em reforço escolar e preparação para provas, sempre buscando tornar o aprendizado mais acessível e eficaz. Atualmente, concilio a docência com a graduação em Direito na UFMA.</p>
              <div className="tech-tags">
                <span className="tech-tag">Foco na UFT</span>
                <span className="tech-tag">Isoladas de matématica</span>
                <span className="tech-tag">Isoladas de química</span>
                <span className="tech-tag">Foco em matérias preferidas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="portfolio-container">
          <h2 className="section-title">Meu Portfolio</h2>
          <div className="portfolio-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={tessat} alt="Tessat Edu" />
                
              </div>
              <div className="project-content">
                <h3 className="project-title">Tessat Edu</h3>
                <p className="project-description">Plataforma educacional inovadora que oferece cursos de matemática e preparação para vestibulares com metodologia exclusiva e resultados comprovados.</p>
                <div className="tech-tags">
                  <span className="tech-tag">Educação</span>
                  <span className="tech-tag">Matemática</span>
                  <span className="tech-tag">Ensino Personalizado</span>
                  <span className="tech-tag">Preparação ENEM</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src={ufma} alt="UFMA" />
                
              </div>
              <div className="project-content">
                <h3 className="project-title">Projeto UFMA</h3>
                <p className="project-description">Desenvolvimento de material didático e metodologias de ensino para auxiliar estudantes universitários em disciplinas de exatas e raciocínio lógico.</p>
                <div className="tech-tags">
                  <span className="tech-tag">Ensino Superior</span>
                  <span className="tech-tag">Raciocínio Lógico</span>
                  <span className="tech-tag">Material Didático</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, rgba(139,92,246,0.3), rgba(59,130,246,0.3))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '2rem'
                }}>
                  Aulas Particulares
                </div>
                
              </div>
              <div className="project-content">
                <h3 className="project-title">Aulas Personalizadas</h3>
                <p className="project-description">Sessões individuais ou em pequenos grupos focadas nas necessidades específicas do aluno, com acompanhamento personalizado e plano de estudos.</p>
                <div className="tech-tags">
                  <span className="tech-tag">Reforço Escolar</span>
                  <span className="tech-tag">Vestibular</span>
                  <span className="tech-tag">ENEM</span>
                  <span className="tech-tag">Concursos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="section-title" style={{textAlign:'left'}}>Vamos Conversar</h2>
            <p style={{color:'#a0a0a0',marginBottom:'1rem'}}>Estou sempre aberto a novas oportunidades e colaborações interessantes.</p>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:italo@example.com" style={{color:'#a0a0a0'}}>italoherenio@.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h4>Telefone</h4>
                <a href="tel:+5511999999999" style={{color:'#a0a0a0'}}>+55 (11) 99999-9999</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Localização</h4>
                <p style={{color:'#a0a0a0'}}>Imperatriz, Maranhão </p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={enviarMensagem}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nome</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="form-input" 
                  placeholder="Seu nome" 
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="form-input" 
                  placeholder="seu@email.com" 
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Assunto</label>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                className="form-input" 
                placeholder="Sobre o que você quer falar?" 
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Mensagem</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className="form-textarea" 
                placeholder="Conte-me sobre seu projeto..." 
                required
              />
            </div>
            <button type="submit" className="form-submit">Enviar Mensagem 🚀</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div>
              <h3 className="footer-brand">Italo Herênio</h3>
              <p className="footer-description">Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras que fazem a diferença na vida das pessoas.</p>
              <div className="footer-social">
                <a href="https://github.com" className="footer-social-link">🐙</a>
                <a href="https://linkedin.com" className="footer-social-link">💼</a>
                <a href="mailto:italo@example.com" className="footer-social-link">✉️</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#carreira">Carreira</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Tecnologias Feitas</h4>
              <ul>
                <li>React & Next.js</li>
                <li>js & typescript</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Italo Herênio. Todos os direitos reservados.</p>
            <div className="footer-love">
              <span>Feito com</span>
              <span className="heart">❤️</span>
              <span>e muito ☕</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;