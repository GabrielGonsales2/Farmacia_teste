// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  console.log("Endpoint /api/products acessado");
  const products = [
    {
      id: 1,
      name: 'Medicamento A',
      description: 'Descrição A',
      price: 50,
      image: 'https://imgs.search.brave.com/Bux4CjXqdatR8dTbRe6VoWPJFerfnMvp6d6BJfKeRLM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnN0YXRpY3BhbnZl/bC5jb20uYnIvcHJv/ZHV0b3MvMTUvZ2Vu/ZXJpY28uanBnP2lt/cz0zMjB4',
      alternatePrices: [
        { pharmacy: 'Farmácia 1', price: 52 },
        { pharmacy: 'Farmácia 2', price: 49 },
        { pharmacy: 'Farmácia 3', price: 51 },
      ],
    },
    {
      id: 2,
      name: 'Medicamento B',
      description: 'Descrição B',
      price: 30,
      image: 'https://imgs.search.brave.com/lD5ys5mLcMAUtP9wnBgWIcZfoBdrh_nXyH-KLWdme-c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jci1u/ZXQtcHVibGljLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS92YXJp/YXRpb25faW1hZ2Uv/RTFFMzgzQ0VCRDA2/M0YxQzQ0RDkwNzRB/RkRCRjFCOTYuYmI4/NDFkYTgtMTc5YS00/OTc2LTllNzktY2Q4/M2Q2YWMyNzA1',
      alternatePrices: [
        { pharmacy: 'Farmácia 1', price: 32 },
        { pharmacy: 'Farmácia 2', price: 31 },
        { pharmacy: 'Farmácia 3', price: 29 },
      ],
    },
    {
      id: 3,
      name: 'Medicamento C',
      description: 'Descrição C',
      price: 25,
      image: 'https://imgs.search.brave.com/UWSvf01TSmsbypDOh8xAIe97UC2gC2FpGOnVGswM-64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91bDI1/MC5jb20vYXBwL3Vw/bG9hZHMvMjAyMC8w/Ni9wcm9kdWN0Lmpw/Zw',
      alternatePrices: [
        { pharmacy: 'Farmácia 1', price: 27 },
        { pharmacy: 'Farmácia 2', price: 26 },
        { pharmacy: 'Farmácia 3', price: 24 },
      ],
    },
    {
      id: 4,
      name: 'Medicamento D',
      description: 'Descrição D',
      price: 60,
      image: 'https://imgs.search.brave.com/v-EGTRK4vTeidHiXgybt-Jgr2dLwj2xpuTRGJetcX3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZHJvZ2FyaWFtaW5h/c2JyYXNpbC5jb20u/YnIvbWVkaWEvcHJv/ZHVjdC9mY2UvY2xv/cmlkcmF0by1kZS1m/ZXhvZmVuYWRpbmEt/MTgwbWctY29tLTEw/LWNvbXByaW1pZG9z/LWdlbmVyaWNvLWNp/bWVkLWQ1ZC5qcGc',
      alternatePrices: [
        { pharmacy: 'Farmácia 1', price: 65 },
        { pharmacy: 'Farmácia 2', price: 58 },
        { pharmacy: 'Farmácia 3', price: 62 },
      ],
    },
    {
      id: 5,
      name: 'Medicamento E',
      description: 'Descrição E',
      price: 40,
      image: 'https://imgs.search.brave.com/r7y7vxReqzBcFzWGpmMI7HdvWErTKs-48JB2ofeFj7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZHJvZ2FyaWFtaW5h/c2JyYXNpbC5jb20u/YnIvbWVkaWEvcHJv/ZHVjdC9kOTcvYmVu/ZWdyaXAtbXVsdGkt/ZmVicmUtZS1kb3It/cGVkaWF0cmljby1w/YXJhY2V0YW1vbC0x/NDBtZy1tbC1mcnV0/YXMtZ290YXMtMTVt/bC1tYW50ZWNvcnAt/NjVmLmpwZw',
      alternatePrices: [
        { pharmacy: 'Farmácia 1', price: 32 },
        { pharmacy: 'Farmácia 2', price: 43 },
        { pharmacy: 'Farmácia 3', price: 52 },
      ],
    },
    {
      id: 6,
      name: 'Medicamento F',
      description: 'Descrição F',
      price: 87,
      image: 'https://imgs.search.brave.com/VKn40dDvfL8ouqLLn9WlLNaS_nF-i7t-nNopEtCq1YU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZHJvZ2FyaWFtaW5h/c2JyYXNpbC5jb20u/YnIvbWVkaWEvcHJv/ZHVjdC8zYjEvYW50/aWFsZXJnaWNvLWxv/cmF0YW1lZC0xMG1n/LWNvbS0xMi1jb21w/cmltaWRvcy03ZjUu/anBn',
      alternatePrices: [
        { pharmacy: 'Farmácia 1', price: 79 },
        { pharmacy: 'Farmácia 2', price: 91 },
        { pharmacy: 'Farmácia 3', price: 80 },
      ],
    },
  ];
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
