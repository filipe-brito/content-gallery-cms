import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

/**Aqui definimos as configurações do
 * sanity e a qual projeto e conta do sanity vamos integrar */

export default defineConfig({
  name: 'default', // identificador interno do sanity
  title: 'laboratory', // nome do projeto

  projectId: 'cyl9ph7m', // ID do projeto no sanity
  dataset: 'production', // nome do dataset. No caso, usamos o dataset padrão "production"

  plugins: [structureTool(), visionTool()], // plugins para estruturar o conteúdo e vision do sanity

  // Abaixo definimos de onde serão importados os schemas. No caso, são criados no arquivo schemaTypes.js
  schema: {
    types: schemaTypes,
  },
})
