export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5daa7e4ff2af8f90130e488f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-saykai3d',
                  apiId: '0da5a693-dbce-46a0-acff-f189a896ec93'
                },
                {
                  buildHookId: '5daa7e50f2af8fae300e485b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ri71o4i6',
                  apiId: '58063ebc-2be9-4777-9c07-0e6fcce5b1c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arcanekit/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ri71o4i6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
