export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605aa0854d3d8e209d9be118",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-dg5bq3h1",
                  apiId: "a291978f-e244-4816-9703-1d9091995279",
                },
                {
                  buildHookId: "605aa08566d0e11f7eac4735",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2p42iqao",
                  apiId: "87e313d4-841a-496d-86fa-015bec6483f5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/saltire/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2p42iqao.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
