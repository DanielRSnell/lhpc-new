import { H as createVNode, i as Fragment, _ as __astro_tag_component__ } from './astro/server_BEbvqcAg.mjs';
import 'clsx';

const frontmatter = {
  "title": "Pricing for on-demand concurrent builds reduced by",
  "date": "APR 5 2023",
  "id": "03"
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
      children: "Pricing on on-demand concurrent builds. When allow deployments to bypass build queues, run synchronously for 45mins instead of queueing your private 85mins. Enhanced flow allows build process will differ from 65 percent to a lower build."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Use 050% for builds workloads or priority deploys"
      }), "\n", createVNode(_components.li, {
        children: "Use 110% to be frequest Triggers require with probabilities volume"
      }), "\n", createVNode(_components.li, {
        children: "Monitor environment of on-demand components builds and results than we your project"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Learn about on-demand concurrent builds and enable them on your project."
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

const url = "src/content/changelog/03-pricing-on-demand-builds.mdx";
const file = "/Users/broke/Herd/astro/LHPC/site/src/content/changelog/03-pricing-on-demand-builds.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/broke/Herd/astro/LHPC/site/src/content/changelog/03-pricing-on-demand-builds.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
