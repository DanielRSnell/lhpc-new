export default function clientInteraction() {
  return {
    name: 'client:interaction',
    hooks: {
      'astro:config:setup': ({ addClientDirective }) => {
        addClientDirective({
          name: 'interaction',
          entrypoint: './src/integrations/client-interaction-directive.js',
        });
      },
    },
  };
}
