// src/Pages/produtos.js

// Importamos TODAS as imagens de produtos aqui
import masc1 from "../assets/masc1.png";
import masc2 from "../assets/masc2.png";
import masc3 from "../assets/masc3.png";
import masc4 from "../assets/masc4.png";
import masc5 from "../assets/masc5.png";
import masc6 from "../assets/masc6.png";
import femn1 from "../assets/femn1.png";
import femn2 from "../assets/femn2.png";
import femn3 from "../assets/femn3.png";
import femn4 from "../assets/femn4.png";
import femn5 from "../assets/femn5.png";
import femn6 from "../assets/femn6.png";
import vest1 from "../assets/vest1.png";
import vest2 from "../assets/vest2.png";
import vest3 from "../assets/vest3.png";
import vest4 from "../assets/vest4.png";
import vest5 from "../assets/vest5.png";
import vest6 from "../assets/vest6.png";
import tenis1 from "../assets/tenis1.png";
import tenis2 from "../assets/tenis2.png";
import tenis3 from "../assets/tenis3.png";
import tenis4 from "../assets/tenis4.png";
import tenis5 from "../assets/tenis5.png";
import tenis6 from "../assets/tenis6.png";

// A palavra 'export' aqui é crucial para que outros arquivos possam usar esta lista
export const produtosIniciais = [
  // --- Produtos Masculinos ---
  { id: 1, nome: 'Moletom com Capuz Simba', desc: 'Moletom flanelado bege com estampa do Simba.', preco: '69.99', img: masc1, vendidos: 50, favorito: false, promocao: true, dataPostagem: '2025-07-10', categoria: 'masculino' },
  { id: 2, nome: 'Kit pijama', desc: 'Camiseta básica de algodão branca com uma bermdua marrom.', preco: '89.99', img: masc2, vendidos: 75, favorito: true, promocao: false, dataPostagem: '2025-07-15', categoria: 'masculino' },
  { id: 3, nome: 'Moletom com Capuz Explore', desc: 'Moletom azul com casaco canguru azul.', preco: '129.90', img: masc3, vendidos: 30, favorito: false, promocao: false, dataPostagem: '2025-06-20', categoria: 'masculino' },
  { id: 4, nome: 'Jaqueta brooklyn verde', desc: 'Jaqueta verde da marca brooklyn.', preco: '249.50', img: masc4, vendidos: 90, favorito: false, promocao: true, dataPostagem: '2025-07-17', categoria: 'masculino' },
  { id: 5, nome: 'Blusão Cinza Speed Time', desc: 'Blusão  cinza com estampa de pássaro.', preco: '79.90', img: masc5, vendidos: 65, favorito: true, promocao: false, dataPostagem: '2025-05-10', categoria: 'masculino' },
  { id: 6, nome: 'Conjunto leão', desc: 'Conjunto de casaco e moletom da marca roar".', preco: '49.99', img: masc6, vendidos: 120, favorito: false, promocao: true, dataPostagem: '2025-07-01', categoria: 'masculino' },
  // --- Produtos Femininos ---
  { id: 7, nome: 'Kit pijama coelho', desc: 'Moletom e camias de mangra comprida com estampa de coelho".', preco: '119.90', img: femn1, vendidos: 85, favorito: true, promocao: false, dataPostagem: '2025-07-11', categoria: 'feminino' },
  { id: 8, nome: 'Casaco gato', desc: 'Casaco laranja com estampa de gato.', preco: '99.99', img: femn2, vendidos: 60, favorito: false, promocao: true, dataPostagem: '2025-06-25', categoria: 'feminino' },
  { id: 9, nome: 'Casaco Stitch', desc: 'Casaco do Stitch.', preco: '149.50', img: femn3, vendidos: 45, favorito: true, promocao: false, dataPostagem: '2025-05-28', categoria: 'feminino' },
  { id: 10, nome: 'Conjunto inverno', desc: 'Camisa de manga comprida com uma saia preta.', preco: '189.90', img: femn4, vendidos: 110, favorito: false, promocao: false, dataPostagem: '2025-07-05', categoria: 'feminino' },
  { id: 11, nome: 'Pijama florado', desc: 'Pijama rosa com flores estampadas.', preco: '219.00', img: femn5, vendidos: 70, favorito: false, promocao: true, dataPostagem: '2025-06-15', categoria: 'feminino' },
  { id: 12, nome: 'Kit pijama vaquinha', desc: 'Moletom e camisa rosa com estampa de vaca.', preco: '299.99', img: femn6, vendidos: 25, favorito: true, promocao: false, dataPostagem: '2025-03-30', categoria: 'feminino' },
  // --- Vestidos ---
  { id: 13, nome: 'Vestido azul florado', desc: 'Vestido azul com estampa de flores brancas.', preco: '450.00', img: vest1, vendidos: 15, favorito: false, promocao: false, dataPostagem: '2025-02-10', categoria: 'vestido' },
  { id: 14, nome: 'Vestido salmão', desc: 'Vestido social cor salmão.', preco: '180.50', img: vest2, vendidos: 55, favorito: true, promocao: false, dataPostagem: '2025-01-20', categoria: 'vestido' },
  { id: 15, nome: 'Vestido Ciganinha Floral', desc: 'Vestido ombro a ombro com estampa de flores.', preco: '130.00', img: vest3, vendidos: 95, favorito: false, promocao: true, dataPostagem: '2025-07-16', categoria: 'vestido' },
  { id: 16, nome: 'Vestido de Renda Branco', desc: 'Vestido curto de renda para ocasiões especiais.', preco: '320.00', img: vest4, vendidos: 20, favorito: true, promocao: false, dataPostagem: '2025-04-15', categoria: 'vestido' },
  { id: 17, nome: 'Vestido Curto de Paetês', desc: 'Vestido justo dourado com paetês para festa.', preco: '250.75', img: vest5, vendidos: 40, favorito: false, promocao: true, dataPostagem: '2025-03-05', categoria: 'vestido' },
  { id: 18, nome: 'Vestido Chemise Listrado', desc: 'Vestido estilo camisa com listras azuis e cinto.', preco: '199.90', img: vest6, vendidos: 65, favorito: true, promocao: false, dataPostagem: '2025-02-22', categoria: 'vestido' },
  // --- Tênis ---
  { id: 19, nome: 'Tênis de Corrida Performance', desc: 'Tênis esportivo colorido com amortecimento.', preco: '350.00', img: tenis1, vendidos: 150, favorito: false, promocao: false, dataPostagem: '2025-07-14', categoria: 'tenis' },
  { id: 20, nome: 'Tênis Casual Branco', desc: 'Tênis de couro sintético branco para o dia a dia.', preco: '220.00', img: tenis2, vendidos: 200, favorito: true, promocao: true, dataPostagem: '2025-06-01', categoria: 'tenis' },
  { id: 21, nome: 'Tênis de Skate Clássico', desc: 'Tênis de lona preto e branco com sola reta.', preco: '180.00', img: tenis3, vendidos: 120, favorito: false, promocao: false, dataPostagem: '2025-03-18', categoria: 'tenis' },
  { id: 22, nome: 'Tênis Plataforma Branco', desc: 'Tênis casual com solado alto estilo plataforma.', preco: '280.50', img: tenis4, vendidos: 80, favorito: true, promocao: false, dataPostagem: '2025-02-09', categoria: 'tenis' },
  { id: 23, nome: 'Tênis de Trilha Adventure', desc: 'Tênis robusto para caminhada e trilhas.', preco: '420.00', img: tenis5, vendidos: 50, favorito: false, promocao: true, dataPostagem: '2025-01-15', categoria: 'tenis' },
  { id: 24, nome: 'Tênis Slip-On Estampado', desc: 'Tênis xadrez sem cadarço, estilo slip-on.', preco: '160.00', img: tenis6, vendidos: 180, favorito: true, promocao: false, dataPostagem: '2025-04-29', categoria: 'tenis' },
];