import { H as createVNode, i as Fragment, _ as __astro_tag_component__ } from './astro/server_BEbvqcAg.mjs';
import 'clsx';

const frontmatter = {
  "title": "Pricing for on-demand concurrent builds reduced by over 50%",
  "date": "APR 17 2025",
  "id": "02"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "New builds automation + running multiple builds, which allows deployments to Storybook built quickly, without affecting your build speed or delaying workloads."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Running - New leads automation"
      }), "\n", createVNode(_components.li, {
        children: "Logs - Pay for the time spent on your requests"
      }), "\n", createVNode(_components.li, {
        children: "Live - Pay 100% for the CPU time"
      }), "\n", createVNode(_components.li, {
        children: "Logs - Pay for the time spent, requests"
      }), "\n", createVNode(_components.li, {
        children: "Logs - Pay for tier spent request"
      }), "\n", createVNode(_components.li, {
        children: "Page - Pay for the tier spent, request, 1hr"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/home/features-tabs/1.webp",
        alt: "Dashboard UI"
      })
    }), "\n", createVNode(_components.p, {
      children: "You can now specify a gray and primary color in your embed urls alongside theme\nToast notifications display has been improved with colors and icons to better differentiate between success, info and error messages"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Fixed a bug where linked activities would not display when not a maintainer of the repository"
      }), "\n", createVNode(_components.li, {
        children: "Fixed a bug where the duplicate action would not fill the new issue form"
      }), "\n", createVNode(_components.li, {
        children: "Fixed a bug where the remove button in the due date field was not disabled when not a maintainer"
      }), "\n", createVNode(_components.li, {
        children: "Fixed a bug where Volta bot would close an issue when a linked pull request was merged on a different branch than the default (this behaviour has been disabled)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/product/launchhpc.webp",
        alt: "Dashboard UI"
      })
    }), "\n", createVNode(_components.p, {
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

const url = "src/content/changelog/02-pricing-concurrent-builds-reduced.mdx";
const file = "/Users/broke/Herd/astro/LHPC/site/src/content/changelog/02-pricing-concurrent-builds-reduced.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/broke/Herd/astro/LHPC/site/src/content/changelog/02-pricing-concurrent-builds-reduced.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
