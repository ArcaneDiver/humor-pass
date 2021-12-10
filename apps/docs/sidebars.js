module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Docusaurus',
      collapsible: true,
      collapsed: true,
      items: ['md-reference', 'mdx'],
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'generated-index',
      },
      items: ['architecture/app', 'architecture/dashboard', 'architecture/cms'],
    },
  ],
};
