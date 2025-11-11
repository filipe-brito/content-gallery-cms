export default {
  name: 'homePageCarouselImage',
  title: 'Imagem do Carrossel da home',
  type: 'document', // diz que esse é um documento independente
  fields: [
    {
      name: 'imageUrl',
      title: 'URL da Imagem (Cloudinary)',
      type: 'url',
      description: 'Cole aqui o link da imagem hospedada no Cloudinary',
      validation: (Rule) => Rule.required().uri({allowRelative: false}),
    },
    {
      name: 'description',
      title: 'Descrição da Imagem',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Texto que será exibido abaixo da imagem no carrossel',
    },
  ],
}
