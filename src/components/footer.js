import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
    <div className="container">
      <div className="footer-parent">
        <div className="whoarewe">

        <h1>LOCALIZAÇÃO E CONTATO</h1>
          <p>

       
            <iframe
              title="RR Multimarcas"
              className='iframeGmaps'
              src="https://www.google.com/maps/embed?origin=mfe&amp;pb=!1m4!2m1!1sR.+Rui+Barbosa,+839+-+Santo+Amaro,+Artur+Nogueira+-+SP,+13160-090%2C+BR!5e0!6i14!5m1!1sen"
              allowFullScreen
            >
            </iframe>
            Endereço:
            Rua Rui Barbosa 839 - Centro, Artur Nogueira - SP, 13160-060<br/>
          </p>

            <ul className="social-icons"
            >  
             <li><FaPhoneAlt size={18} color='#fff'/><span
             className='liPhoneAlt'
              >(19) 97817-5588</span></li>
              <li><a href="https://wa.me/+5519978175588" rel="noreferrer" target="_blank"><FaWhatsapp size={30} color='#fff'/></a></li>
              <li><a href="https://www.instagram.com/rrmultimarcasan/" rel="noreferrer" target="_blank"><FaInstagram size={30} color='#fff'/></a></li>
            </ul>

        </div>
        <div className="location"> 
          <h1>QUEM SOMOS</h1>
          <p>
          Com uma tradição familiar enraizada, somos uma empresa respeitável e confiável no ramo de venda de automóveis novos, seminovos e usados. Nosso compromisso de longa data com a qualidade e a satisfação do cliente nos destaca como uma escolha líder no mercado. Há anos, construímos relações duradouras baseadas na confiança mútua, transparência e integridade.
          <br/>
          Nossa equipe dedicada é apaixonada por carros e está empenhada em entender suas necessidades individuais, ajudando-o a encontrar o veículo perfeito para se adequar ao seu estilo de vida e orçamento. Cada carro em nosso inventário passa por rigorosas inspeções para garantir que você esteja recebendo um produto confiável e de qualidade.
          <br/>
          Desde jovens motoristas até famílias em busca de espaço, nossa ampla seleção oferece opções para todos. Guiamos você por todas as etapas do processo de compra, proporcionando uma experiência tranquila e sem complicações. Se você procura não apenas um carro, mas uma parceria duradoura, estamos aqui para tornar sua jornada automotiva memorável e empolgante.
          </p>
        </div>
      </div>

      <div className="copyright">
        © 2023 develop by <a className='dc' taget='_blank' href='https://dotcomma.dev'>DC</a>
      </div>
    </div>
  </div>
  );
}

export default Footer;