export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    {
      name: 'structure-menu'
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8dd5dc4e54840111e4686b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jvd4rhad',
                  apiId: '1f9139e8-dff7-4a73-a222-c1da50e32bd3'
                },
                {
                  buildHookId: '5f8dd5dc31c66b00a1a0c628',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-j6cqkb79',
                  apiId: 'a471bb02-1790-4a5e-b8dd-cada7c7bcce4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gsdavris/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-j6cqkb79.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
