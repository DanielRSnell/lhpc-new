import { e as createAstro, c as createComponent, b as renderTemplate, d as addAttribute, r as renderComponent, f as renderHead, g as renderSlot } from './astro/server_BEbvqcAg.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                         */
import { b as SITE_METADATA, a as SITE_TITLE } from './consts_Cm1t2m2d.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';
import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, Users, Cpu, Cloud, Settings, Zap, Shield, Microscope, Landmark, Factory, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://launchhpc.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image } = Astro2.props;
  const finalTitle = title || SITE_METADATA.title.default;
  const finalDescription = description || SITE_METADATA.description;
  const finalImage = image || SITE_METADATA.openGraph.images[0].url;
  const imageURL = new URL(finalImage, Astro2.url);
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots"', '><meta name="keywords"', '><meta name="author"', '><meta name="creator"', '><meta name="publisher"', "><!-- Theme Script --><script>\n  const savedTheme = localStorage.getItem('starlight-theme');\n  const initialTheme = savedTheme || 'dark';\n  document.documentElement.classList.toggle('dark', initialTheme === 'dark');\n  document.documentElement.setAttribute('data-theme', initialTheme);\n<\/script><!-- Favicon -->", "", "", '<link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"', "", '><meta name="generator"', '><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width"', '><meta property="og:image:height"', '><meta property="og:image:alt"', '><!-- Twitter --><meta property="twitter:card"', '><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:creator"', ">"])), addAttribute(`${"index" }, ${"follow" }`, "content"), addAttribute(SITE_METADATA.keywords.join(", "), "content"), addAttribute(SITE_METADATA.authors[0].name, "content"), addAttribute(SITE_METADATA.creator, "content"), addAttribute(SITE_METADATA.publisher, "content"), SITE_METADATA.icons.icon.map((icon) => renderTemplate`<link rel="icon"${addAttribute(icon.type, "type")}${addAttribute(icon.sizes, "sizes")}${addAttribute(icon.url, "href")}>`), SITE_METADATA.icons.apple.map((icon) => renderTemplate`<link rel="apple-touch-icon"${addAttribute(icon.sizes, "sizes")}${addAttribute(icon.url, "href")}>`), SITE_METADATA.icons.shortcut.map((icon) => renderTemplate`<link rel="shortcut icon"${addAttribute(icon.url, "href")}>`), addAttribute(SITE_TITLE, "title"), addAttribute(new URL("rss.xml", Astro2.site), "href"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), finalTitle, addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(Astro2.url, "content"), addAttribute(SITE_METADATA.openGraph.siteName, "content"), addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(imageURL, "content"), addAttribute(SITE_METADATA.openGraph.images[0].width.toString(), "content"), addAttribute(SITE_METADATA.openGraph.images[0].height.toString(), "content"), addAttribute(SITE_METADATA.openGraph.images[0].alt, "content"), addAttribute(SITE_METADATA.twitter.card, "content"), addAttribute(Astro2.url, "content"), addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(imageURL, "content"), addAttribute(SITE_METADATA.twitter.creator, "content"));
}, "/Users/broke/Herd/astro/LHPC/site/src/components/BaseHead.astro", void 0);

function Logo({
  iconClassName,
  wordmarkClassName,
  className,
  href = "/",
  noLink = false,
  iconOnly = false
}) {
  const Element = noLink ? "div" : "a";
  return /* @__PURE__ */ jsxs(
    Element,
    {
      href,
      className: cn(
        "flex items-center gap-1.75 text-xl font-medium",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/logos/light-icon.png",
            alt: "LaunchHPC",
            className: cn("h-8 w-8 object-contain dark:hidden", iconClassName)
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/logos/dark-icon.png",
            alt: "LaunchHPC",
            className: cn(
              "hidden h-8 w-8 object-contain dark:block",
              iconClassName
            )
          }
        ),
        !iconOnly && /* @__PURE__ */ jsx("span", { className: cn("font-semibold", wordmarkClassName), children: "LaunchHPC" })
      ]
    }
  );
}

function ThemeToggle({ className } = {}) {
  const [theme, setTheme] = useState("dark");
  const buttonRef = useRef(null);
  const storageKey = "starlight-theme";
  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey);
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.setAttribute("data-theme", initialTheme);
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem(storageKey);
      if (newTheme) {
        setTheme(newTheme);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      const dataTheme = document.documentElement.getAttribute("data-theme");
      const currentTheme = dataTheme || (isDark ? "dark" : "light");
      setTheme(currentTheme);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"]
    });
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);
  const shineVariant = {
    hidden: {
      opacity: 0,
      scale: 2,
      strokeDasharray: "20, 1000",
      strokeDashoffset: 0,
      filter: "blur(0px)"
    },
    visible: {
      opacity: [0, 1, 0],
      strokeDashoffset: [0, -50, -100],
      filter: ["blur(2px)", "blur(2px)", "blur(0px)"],
      transition: {
        duration: 0.75
      }
    }
  };
  const raysVariants = {
    hidden: {
      strokeOpacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      strokeOpacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  const rayVariant = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      // Start from center of the circle
      scale: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        // Customize timing for each property
        pathLength: { duration: 0.3 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.3 }
      }
    }
  };
  const toggleTheme = () => {
    if (document.startViewTransition) {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (rect.left + rect.right) / 2;
        const y = (rect.top + rect.bottom) / 2;
        document.documentElement.style.setProperty(
          "--x",
          `${x / window.innerWidth * 100}%`
        );
        document.documentElement.style.setProperty(
          "--y",
          `${y / window.innerHeight * 100}%`
        );
      }
      document.documentElement.classList.remove("page-transition");
      document.documentElement.classList.add("theme-transition");
      document.startViewTransition(() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark");
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem(storageKey, newTheme);
      }).finished.then(() => {
        setTimeout(() => {
          document.documentElement.classList.remove("theme-transition");
        }, 600);
      }).catch(() => {
        document.documentElement.classList.remove("theme-transition");
      });
    } else {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark");
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem(storageKey, newTheme);
    }
  };
  const sunPath = "M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C60 29 69.5 38 70 49.5Z";
  const moonPath = "M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C39 45 49.5 59.5 70 49.5Z";
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: toggleTheme,
      "data-theme-toggle": true,
      ref: buttonRef,
      className,
      children: /* @__PURE__ */ jsxs(
        motion.svg,
        {
          strokeWidth: "4",
          strokeLinecap: "round",
          width: 100,
          height: 100,
          viewBox: "0 0 100 100",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "relative",
          children: [
            /* @__PURE__ */ jsx(
              motion.path,
              {
                variants: shineVariant,
                d: moonPath,
                className: "stroke-chart-1 absolute top-0 left-0",
                initial: "hidden",
                animate: theme === "dark" ? "visible" : "hidden"
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.g,
              {
                variants: raysVariants,
                initial: "hidden",
                animate: theme === "light" ? "visible" : "hidden",
                className: "stroke-chart-3 stroke-6",
                style: { strokeLinecap: "round" },
                children: [
                  /* @__PURE__ */ jsx(
                    motion.path,
                    {
                      className: "origin-center",
                      variants: rayVariant,
                      d: "M50 2V11"
                    }
                  ),
                  /* @__PURE__ */ jsx(motion.path, { variants: rayVariant, d: "M85 15L78 22" }),
                  /* @__PURE__ */ jsx(motion.path, { variants: rayVariant, d: "M98 50H89" }),
                  /* @__PURE__ */ jsx(motion.path, { variants: rayVariant, d: "M85 85L78 78" }),
                  /* @__PURE__ */ jsx(motion.path, { variants: rayVariant, d: "M50 98V89" }),
                  /* @__PURE__ */ jsx(motion.path, { variants: rayVariant, d: "M23 78L16 84" }),
                  /* @__PURE__ */ jsx(motion.path, { variants: rayVariant, d: "M11 50H2" }),
                  /* @__PURE__ */ jsx(motion.path, { variants: rayVariant, d: "M23 23L16 16" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.path,
              {
                d: sunPath,
                fill: "transparent",
                transition: { duration: 1, type: "spring" },
                initial: { fillOpacity: 0, strokeOpacity: 0, d: sunPath },
                animate: {
                  d: theme === "dark" ? moonPath : sunPath,
                  rotate: theme === "dark" ? -360 : 0,
                  scale: theme === "dark" ? 2 : 1,
                  stroke: theme === "dark" ? "var(--color-chart-1)" : "var(--color-chart-3)",
                  fill: theme === "dark" ? "var(--color-chart-1)" : "var(--color-chart-3)",
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                  transition: { delay: 0.1 }
                }
              }
            )
          ]
        }
      )
    }
  );
}

function Accordion({
  ...props
}) {
  return /* @__PURE__ */ jsx(AccordionPrimitive.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ jsx(
          ChevronDownIcon,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover/75 group-data-[viewport=false]/navigation-menu:backdrop-blur-md group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-xl group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx(
        NavigationMenuPrimitive.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center bg-popover/95 backdrop-blur-md text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

const NAV_LINKS = [
  {
    label: "Products",
    href: "/product",
    subitems: [
      {
        label: "Multi-Tenant Orchestration",
        href: "/product",
        description: "Secure workload isolation across teams and organizations",
        icon: Users
      },
      {
        label: "AI/HPC Optimization",
        href: "/product",
        description: "Intelligent resource allocation and performance tuning",
        icon: Cpu
      },
      {
        label: "Hybrid Cloud Management",
        href: "/product",
        description: "Seamless orchestration across on-prem and cloud infrastructure",
        icon: Cloud
      },
      {
        label: "Enterprise Configuration",
        href: "/product",
        description: "Centralized policy management and compliance controls",
        icon: Settings
      }
    ]
  },
  {
    label: "Industries",
    href: "/industry",
    megaMenu: true,
    subitems: [
      {
        label: "Neoclouds",
        href: "/industry/neocloud",
        description: "GPU cloud providers like CoreWeave and Lambda Labs",
        details: "Maximize infrastructure efficiency, optimize multi-tenant workloads, and drive revenue growth with intelligent resource allocation.",
        icon: Zap,
        featured: true
      },
      {
        label: "Sovereign Clouds",
        href: "/industry/sovereign-cloud",
        description: "National and regional cloud infrastructure",
        details: "Ensure data sovereignty while delivering world-class HPC performance for government and enterprise workloads.",
        icon: Shield
      },
      {
        label: "Research Institutions",
        href: "/industry/research",
        description: "Universities and national laboratories",
        details: "Accelerate scientific discovery with scalable compute resources for genomics, climate modeling, and advanced research.",
        icon: Microscope
      },
      {
        label: "Financial Services",
        href: "/industry/financial",
        description: "Banks, trading firms, and fintech",
        details: "Power algorithmic trading, risk modeling, and fraud detection with low-latency HPC infrastructure.",
        icon: Landmark
      },
      {
        label: "Manufacturing",
        href: "/industry/manufacturing",
        description: "Automotive, aerospace, and industrial",
        details: "Optimize CAD/CAE simulations, digital twins, and supply chain modeling for next-generation products.",
        icon: Factory
      },
      {
        label: "Global Enterprises",
        href: "/industry/enterprise",
        description: "Fortune 500 and multinational corporations",
        details: "Deploy hybrid HPC infrastructure across global operations with enterprise-grade security and compliance.",
        icon: Building2
      }
    ]
  },
  { label: "Company", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" }
];
const ACTION_BUTTONS = [
  { label: "Log in", href: "/signin", variant: "ghost" },
  { label: "Sign up", href: "/signup", variant: "default" }
];
const Navbar = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndustry, setHoveredIndustry] = useState("Neoclouds");
  const hideNavbar = [
    "/signin",
    "/signup",
    "/login",
    "/signin",
    "/signup",
    "/otp",
    "/forgot-password",
    "/docs"
  ].some((route) => currentPage.includes(route));
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  if (hideNavbar) return null;
  return /* @__PURE__ */ jsx("header", { className: "lg:border-b", children: /* @__PURE__ */ jsxs("div", { className: "relative z-50 container flex h-[var(--header-height)] items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsx(Logo, { className: "w-47" }),
    /* @__PURE__ */ jsx(NavigationMenu, { viewport: false, className: "hidden lg:block", children: /* @__PURE__ */ jsx(NavigationMenuList, { className: "gap-4 xl:gap-8", children: NAV_LINKS.map((item) => /* @__PURE__ */ jsx(NavigationMenuItem, { children: item.subitems ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        NavigationMenuTrigger,
        {
          className: cn(
            "cursor-pointer bg-transparent [&_svg]:ms-2 [&_svg]:size-4",
            currentPage.startsWith(item.href) && "bg-accent font-semibold"
          ),
          children: item.label
        }
      ),
      /* @__PURE__ */ jsx(NavigationMenuContent, { className: "", children: item.megaMenu ? (
        // Mega Menu for Industries
        /* @__PURE__ */ jsx("ul", { className: "grid w-[526px] grid-cols-2 gap-2", children: item.subitems?.map((subitem) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          NavigationMenuLink,
          {
            href: subitem.href,
            className: "flex-row items-start gap-3 p-3",
            children: [
              /* @__PURE__ */ jsx(subitem.icon, { className: "text-foreground mt-0.5 size-5.5" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium tracking-normal", children: subitem.label }),
                  subitem.featured && /* @__PURE__ */ jsx("span", { className: "rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase", children: "NEW" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs leading-snug", children: subitem.description })
              ] })
            ]
          }
        ) }, subitem.label)) })
      ) : (
        // Regular dropdown menu
        /* @__PURE__ */ jsx("ul", { className: "grid w-[263px] gap-2", children: item.subitems?.map((subitem) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          NavigationMenuLink,
          {
            href: subitem.href,
            className: "flex-row items-center gap-3 p-3",
            children: [
              /* @__PURE__ */ jsx(subitem.icon, { className: "text-foreground size-5.5" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium tracking-normal", children: subitem.label }),
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs leading-snug", children: subitem.description })
              ] })
            ]
          }
        ) }, subitem.label)) })
      ) })
    ] }) : /* @__PURE__ */ jsx(
      NavigationMenuLink,
      {
        href: item.href,
        className: cn(
          navigationMenuTriggerStyle(),
          "bg-transparent",
          currentPage === item.href && "bg-accent font-semibold"
        ),
        children: item.label
      }
    ) }, item.label)) }) }),
    /* @__PURE__ */ jsxs("div", { className: "hidden w-47 items-center justify-end gap-4 lg:flex", children: [
      /* @__PURE__ */ jsx(ThemeToggle, {}),
      ACTION_BUTTONS.map((button) => /* @__PURE__ */ jsx(
        Button,
        {
          size: "sm",
          variant: button.variant,
          asChild: true,
          children: /* @__PURE__ */ jsx("a", { href: button.href, children: button.label })
        },
        button.label
      ))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 lg:hidden lg:gap-4", children: [
      /* @__PURE__ */ jsx(ThemeToggle, {}),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "text-muted-foreground relative flex size-8 rounded-sm border lg:hidden",
          onClick: () => setIsMenuOpen(!isMenuOpen),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: cn(
                  "absolute top-1/2 left-1/2 block w-4 -translate-x-1/2 -translate-y-1/2"
                ),
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      "aria-hidden": "true",
                      className: cn(
                        "absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out",
                        isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      "aria-hidden": "true",
                      className: cn(
                        "absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out",
                        isMenuOpen ? "opacity-0" : ""
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      "aria-hidden": "true",
                      className: cn(
                        "absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out",
                        isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                      )
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "bg-background/95 text-accent-foreground fixed inset-0 top-[var(--header-height)] z-50 flex flex-col justify-between tracking-normal backdrop-blur-md transition-all duration-500 ease-out lg:hidden",
          isMenuOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-full opacity-0"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(
            NavigationMenu,
            {
              orientation: "vertical",
              className: "inline-block w-full max-w-none py-10",
              children: /* @__PURE__ */ jsx(NavigationMenuList, { className: "w-full flex-col items-start gap-6", children: NAV_LINKS.map((item) => /* @__PURE__ */ jsx(NavigationMenuItem, { className: "w-full", children: item.subitems ? /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "", children: /* @__PURE__ */ jsxs(AccordionItem, { value: item.label, children: [
                /* @__PURE__ */ jsx(AccordionTrigger, { className: "flex w-full items-center justify-between p-2 text-base font-normal", children: item.label }),
                /* @__PURE__ */ jsx(AccordionContent, { className: "pt-2 pb-0", children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: item.subitems.map((subitem) => /* @__PURE__ */ jsxs(
                  NavigationMenuLink,
                  {
                    href: subitem.href,
                    onClick: () => setIsMenuOpen(false),
                    className: cn(
                      "text-muted-foreground hover:bg-accent/50 flex flex-row gap-2 p-3 font-medium transition-colors",
                      currentPage === subitem.href && "bg-accent font-semibold"
                    ),
                    children: [
                      /* @__PURE__ */ jsx(subitem.icon, { className: "size-5.5" }),
                      /* @__PURE__ */ jsx("span", { className: "", children: subitem.label })
                    ]
                  },
                  subitem.label
                )) }) })
              ] }) }) : /* @__PURE__ */ jsx(
                NavigationMenuLink,
                {
                  href: item.href,
                  className: cn(
                    "hover:text-foreground text-base transition-colors",
                    currentPage === item.href && "font-semibold"
                  ),
                  onClick: () => setIsMenuOpen(false),
                  children: item.label
                }
              ) }, item.label)) })
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-4.5 border-t px-6 py-4", children: ACTION_BUTTONS.map((button) => /* @__PURE__ */ jsx(
            Button,
            {
              variant: button.variant === "ghost" ? "muted" : button.variant,
              asChild: true,
              className: "h-12 flex-1 rounded-sm transition-all hover:scale-105",
              children: /* @__PURE__ */ jsx("a", { href: button.href, onClick: () => setIsMenuOpen(false), children: button.label })
            },
            button.label
          )) })
        ]
      }
    )
  ] }) });
};

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: /* @__PURE__ */ jsx(FaInstagram, { className: "size-4" })
  },
  {
    name: "WhatsApp",
    href: "https://wa.me",
    icon: /* @__PURE__ */ jsx(FaWhatsapp, { className: "size-4" })
  },
  {
    name: "X",
    href: "https://x.com",
    icon: /* @__PURE__ */ jsx(FaXTwitter, { className: "size-4" })
  }
];
const Footer = ({ currentPage }) => {
  const hideFooter = [
    "/signin",
    "/signup",
    "/login",
    "/(auth)/signin",
    "/(auth)/signup",
    "/(auth)/otp",
    "/(auth)/forgot-password",
    "/docs"
  ].some((route) => currentPage.includes(route));
  if (hideFooter) return null;
  return /* @__PURE__ */ jsxs("footer", { className: "section-padding relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsx(
        Logo,
        {
          className: "mt-20 justify-center gap-3 text-3xl lg:mt-30",
          iconClassName: "w-10"
        }
      ),
      /* @__PURE__ */ jsxs("h2", { className: "my-8 text-2xl lg:my-6 lg:text-5xl", children: [
        "Deploy it. Scale it.",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Orchestrate it. Effortlessly." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-sm justify-center gap-4.5", children: [
        /* @__PURE__ */ jsx(Button, { className: "flex-1", children: "Get Started" }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            className: "border-input bg-accent flex-1 border",
            children: "Learn More"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm", children: "Trusted by enterprises worldwide" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mt-20 flex flex-col-reverse justify-between gap-8 text-xs lg:mt-30 lg:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxs("p", { className: "", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " LaunchHPC — Built for builders."
        ] }),
        " ",
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-7 lg:hidden", children: SOCIAL_LINKS.map((link, index) => /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            className: "transition-opacity hover:opacity-80",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": link.name,
            children: link.icon
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-between gap-4 lg:justify-center lg:gap-8", children: NAV_LINKS.map((link, index) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          className: "transition-opacity hover:opacity-80",
          children: link.label
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "hidden items-center gap-7 lg:flex", children: SOCIAL_LINKS.map((link, index) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          className: "transition-opacity hover:opacity-80",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": link.name,
          children: link.icon
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx(GradientSVG, { className: "absolute right-0 bottom-0 -z-10 origin-bottom-right scale-50 rotate-30 md:scale-100 md:rotate-0" })
  ] });
};
const GradientSVG = (props) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 1728,
      height: 846,
      fill: "none",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#D9D9D9",
            d: "M1177.53 861.277 916.196 671.842l219.414 1.229 577.9 192.473 175.12 108.362-711.1-112.629Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#a)",
            d: "M1177.53 861.277 916.196 671.842l219.414 1.229 577.9 192.473 175.12 108.362-711.1-112.629Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            stroke: "url(#b)",
            strokeWidth: 0.382,
            d: "M1177.53 861.277 916.196 671.842l219.414 1.229 577.9 192.473 175.12 108.362-711.1-112.629Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#c)",
            d: "m1170.06 635.181 383.29 10.476c89.05 23.364-95.87-.687-14.62 49.327 129.26 79.561 496.5 237.203 415.69 243.884-131.61 10.88-539.49-145.574-692.48-205.16-122.39-47.67-112.25-85.547-91.88-98.527Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#d)",
            d: "M-589.438 206.029 1045.4 512.02l232.91 49.794-97.31 27.814-306.061 28.434c-52.525-1.145-204.218-25.902-390.785-115.779C320.26 423.329-330.864 259.672-589.438 206.029l-82.447-15.432c18.417 2.695 46.676 8.01 82.447 15.432Z"
          }
        ),
        /* @__PURE__ */ jsx("g", { filter: "url(#e)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#f)",
            d: "m1178.94 817.498 871.42 102.661-430.03-28.582-441.39-74.079Z"
          }
        ) }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "a",
              x1: 1421.68,
              x2: 1373.8,
              y1: 757.825,
              y2: 919.52,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#9D83E7" }),
                /* @__PURE__ */ jsx("stop", { offset: 0.582, stopColor: "#E74548" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "b",
              x1: 1421.68,
              x2: 1373.81,
              y1: 757.825,
              y2: 919.427,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#10CBF4" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#10CBF4", stopOpacity: 0 })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "c",
              x1: 1151.22,
              x2: 1703.59,
              y1: 674.289,
              y2: 839.434,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#9259ED" }),
                /* @__PURE__ */ jsx("stop", { offset: 0.514, stopColor: "#CF54EE" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#FB8684" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "d",
              x1: 564.644,
              x2: 509.973,
              y1: 350.376,
              y2: 534.962,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#B956EE" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#9672FF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "f",
              x1: 1801.48,
              x2: 1525.2,
              y1: 895.985,
              y2: 590.241,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#00C7F9" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#FF474A" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "filter",
            {
              id: "e",
              width: 907.452,
              height: 138.693,
              x: 1160.92,
              y: 799.482,
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsx("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                /* @__PURE__ */ jsx(
                  "feGaussianBlur",
                  {
                    result: "effect1_foregroundBlur_401_39876",
                    stdDeviation: 9.008
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
};

const $$Astro = createAstro("https://launchhpc.com");
const $$DefaultLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  const { title, description } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body${addAttribute(`min-h-screen relative antialiased flex flex-col [--header-height:calc(var(--spacing)*17)]`, "class")}>  <div class="bg-background/10 absolute inset-0 z-[-2] backdrop-blur-[85px] will-change-transform md:backdrop-blur-[170px]"></div>  <div class="absolute inset-0 z-[-1] size-full opacity-70 mix-blend-overlay dark:md:opacity-100"${addAttribute({
    background: `url(/images/noise.webp) lightgray 0% 0% / 83.69069695472717px 83.69069695472717px repeat`
  }, "style")}></div> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "currentPage": currentPath, "client:component-hydration": "load", "client:component-path": "@/components/layout/navbar", "client:component-export": "default" })} <main class="flex-1">${renderSlot($$result, $$slots["default"])}</main> ${renderComponent($$result, "Footer", Footer, { "client:load": true, "currentPage": currentPath, "client:component-hydration": "load", "client:component-path": "@/components/layout/footer", "client:component-export": "default" })} </body></html>`;
}, "/Users/broke/Herd/astro/LHPC/site/src/layouts/DefaultLayout.astro", void 0);

export { $$DefaultLayout as $, Button as B, Logo as L, cn as c };
