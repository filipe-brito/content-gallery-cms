/**Esse é o object que o sanity usa para criar um schema.
 * Schema é como o sanity sabe quais campos cada documento deve
 * conter e como eles devem ser exibidos na interface do usuário do sanity studio.
 * Esse object cria inputs onde o usuário preenche.
 * As informações preenchidas serão servidas para o front-end pela api do sanity*/

export default {
  name: 'homePageCarouselImage', // Identificador único do schema
  title: 'Imagem do Carrossel da home', // Título exibido no painel do Sanity Studio
  type: 'document', // diz que esse é um documento independente

  /** Os fields são os campos que o usuário irá preencher para sanity
   * studio servir para o front-end via api */
  fields: [
    {
      name: 'imageUrl', // identificador do input
      // título exibido que descreve o input
      title: 'URL da Imagem (Cloudinary)',
      // tipo de dado aceito no input. Sanity vai validar o dado inserido com base nesse tipo
      type: 'url',
      // descrição exibida abaixo do input
      description: 'Cole aqui o link da imagem hospedada no Cloudinary',
      /**validação personalizada. Torna o campo obrigatório e valida se o valor
       * inserido é uma URL absoluta (inicia com "http://"" ou "https://")
       * Essa cadeia de métodos é nativa do sanity client*/
      validation: (Rule) => Rule.required().uri({allowRelative: false}),
    },
    {
      name: 'description', // identificador do input
      title: 'Descrição da Imagem', // título exibido que descreve o input
      /**type + of define que esse campo é para texto editável.
       * No Studio, o usuário verá um editor de texto rico para inserir a descrição.
       * O conteúdo desse input deve ser inserido em um componente <PortableText />
       * no front-end para renderizar corretamente o texto formatado.
       */

      // tipo de dado aceito no input. Sanity vai validar o dado inserido com base nesse tipo
      type: 'array',
      // define que o array pode conter blocos de texto rico, ou seja, texto com formatação
      of: [{type: 'block'}],
      // descrição exibida abaixo do input
      description: 'Texto que será exibido abaixo da imagem no carrossel',
    },
  ],
}
