import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings, MdAssignment, MdGroup, MdFolderSpecial } from "react-icons/md"

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['page', 'route', 'site-config', 'post', 'author', 'postCategory'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site config')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('site-config')
            .documentId('global-config')
        ),
      S.listItem()
        .title('Pages')
        .icon(MdDashboard)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Routes')
        .schemaType('route')
        .child(S.documentTypeList('route').title('Routes')),
      S.listItem()
        .title('Posts')
        .icon(MdAssignment)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Post Categories')
        .icon(MdFolderSpecial)
        .schemaType('postCategory')
        .child(S.documentTypeList('postCategory').title('Post Categories')),
      S.listItem()
        .title('Authors')
        .icon(MdGroup)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
