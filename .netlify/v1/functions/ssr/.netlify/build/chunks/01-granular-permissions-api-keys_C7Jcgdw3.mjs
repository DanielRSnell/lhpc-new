import { H as createVNode, i as Fragment, _ as __astro_tag_component__ } from './astro/server_BEbvqcAg.mjs';
import 'clsx';

const frontmatter = {
  "title": "Granular permissions for API keys",
  "date": "APR 25 2025",
  "id": "01"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Personal API keys now support fine-grained permission controls. Instead of keys inheriting all your permissions, you can tailor access to specific use cases."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Restrict keys to individual teams you have access to (public or private)"
      }), "\n", createVNode(_components.li, {
        children: "Set keys to read-only or write-only"
      }), "\n", createVNode(_components.li, {
        children: "Limit permissions to specific actions such as creating issues"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This is a more secure approach since it minimizes each key’s access surface. Configure permissions when creating new API keys or manage existing ones in Settings > Account > Personal API Keys."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/changelog/01-granular-permissions-api-keys.mdx";
const file = "/Users/broke/Herd/astro/LHPC/site/src/content/changelog/01-granular-permissions-api-keys.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/broke/Herd/astro/LHPC/site/src/content/changelog/01-granular-permissions-api-keys.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
