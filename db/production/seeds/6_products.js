exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1,
          title: 'Tênis de Caminhada Leve Confortável',
          price: 179.9,
          brand: 'Nike',
          category: 'corrida',
          male: true,
          female: true,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        },
        {
          id: 2,
          title:
            'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
          price: 139.9,
          brand: 'VR',
          category: 'corrida',
          male: true,
          female: false,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        },
        {
          id: 3,
          title: 'Tênis Adidas Duramo Lite 2.0',
          price: 219.9,
          brand: 'Adidas',
          category: 'corrida',
          male: true,
          female: true,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
        },
        {
          id: 4,
          title:
            'Timberland PRO Reaxion Mid Composite Safety Toe Waterproof',
          price: 439.9,
          brand: 'Timberland',
          category: 'bota',
          male: true,
          female: false,
          image:
            'https://m.media-amazon.com/images/I/71TBKxoIrmL._AC_SR700,525_.jpg',
        },
        {
          id: 5,
          title: 'Dansko Professional',
          price: 119.9,
          brand: 'Dansko',
          category: 'social',
          male: false,
          female: true,
          image:
            'https://m.media-amazon.com/images/I/71iVlNLK+bL._AC_SR700,525_.jpg',
        },
        {
          id: 6,
          title: 'Asics GT-2000 8',
          price: 219.9,
          brand: 'Asics',
          category: 'corrida',
          male: false,
          female: true,
          image:
            'https://m.media-amazon.com/images/I/71M60FLi5BL._AC_SR700,525_.jpg',
        },
      ]);
    });
};
