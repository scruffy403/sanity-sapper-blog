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
                  buildHookId: '60a56bbf1ac38c4fd46e6e80',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-mnh7ht6f',
                  apiId: '07575423-f299-4a49-a26a-7086a7e13de6'
                },
                {
                  buildHookId: '60a56bc0e33f0d42fde569d2',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-9qc7856e',
                  apiId: 'a93abe33-f3a3-41d5-bbfd-ad0ad1f0651e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scruffy403/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-9qc7856e.netlify.app', category: 'apps'}
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
