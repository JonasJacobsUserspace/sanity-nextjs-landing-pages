export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f423c3e442f8e564dc9c314',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vveda8si',
                  apiId: 'd9b4c552-7dbd-4e81-8ae8-ef5723af0834'
                },
                {
                  buildHookId: '5f423c3e8ef4ebeb3199c8c5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qf1r3ni9',
                  apiId: '6bcf540a-12ee-40fa-a97c-44492b48a942'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JonasJacobsUserspace/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qf1r3ni9.netlify.app', category: 'apps'}
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
