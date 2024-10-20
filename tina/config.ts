import { defineConfig } from "tinacms";

function getFileNameWithoutExtension(filePath: string): string {
  const lastSlashIndex = filePath.lastIndexOf("/");

  const fileNameWithExtension =
    lastSlashIndex !== -1 ? filePath.substring(lastSlashIndex + 1) : filePath;

  const lastDotIndex = fileNameWithExtension.lastIndexOf(".");

  return lastDotIndex !== -1
    ? fileNameWithExtension.substring(0, lastDotIndex)
    : fileNameWithExtension;
}

function getDirName(filePath: string): string {
  const lastSlashIndex = filePath.lastIndexOf("/");
  return lastSlashIndex !== -1 ? filePath.substring(0, lastSlashIndex) : "";
}

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        format: "mdx",
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              return values.title?.toLowerCase().replace(/ /g, "-");
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: { component: "tags" },
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "object",
            list: true,
            name: "authors",
            label: "Authors",
            ui: {
              itemProps: (item) => {
                return { label: `${item?.author}` };
              },
            },
            fields: [
              {
                type: "reference",
                label: "Author",
                name: "author",
                collections: ["author"],
                ui: {
                  format: (value) => `src/content/authors/${value}.yaml`,
                  parse: (value) => getFileNameWithoutExtension(value),
                },
              },
            ],
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "relatedPosts",
            label: "Related Posts",
            ui: {
              itemProps: (item) => {
                return { label: `${item?.relatedPost}` };
              },
            },
            fields: [
              {
                type: "reference",
                label: "Related Post",
                name: "relatedPost",
                collections: ["post"],
                ui: {
                  format: (value) => `src/content/posts/${value}.mdx`,
                  parse: (value) =>
                    `${getFileNameWithoutExtension(getDirName(value))}/${getFileNameWithoutExtension(value)}`,
                },
              },
            ],
          },
        ],
      },
      {
        name: "author",
        label: "Authors",
        path: "src/content/authors",
        format: "yaml",
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              return values.title?.toLowerCase().replace(/ /g, "-");
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "surname",
            label: "Surname",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
          {
            type: "object",
            name: "socialMedia",
            label: "Social Media",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: `${item?.name}` };
              },
            },
            fields: [
              {
                label: "Name",
                name: "name",
                type: "string",
                isTitle: true,
                required: true,
              },
              { label: "Icon", name: "icon", type: "string" },
              { label: "Link", name: "link", type: "string" },
            ],
          },
        ],
      },
      {
        name: "publication",
        label: "Publications",
        path: "src/content/publications",
        format: "yaml",
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              return values.title?.toLowerCase().replace(/ /g, "-");
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            required: true,
            options: [
              { value: "journal", label: "Journal" },
              { value: "patent", label: "Patent" },
              { value: "book", label: "Book" },
              { value: "thesis", label: "Thesis" },
            ],
          },
          {
            type: "number",
            name: "pubYear",
            label: "Publication year",
            required: true,
          },
          {
            type: "number",
            name: "pubMonth",
            label: "Publication month",
            required: true,
          },
          {
            type: "number",
            name: "pubDay",
            label: "Publication day",
          },
          {
            type: "string",
            name: "doi",
            label: "DOI",
          },
          {
            type: "string",
            name: "journal",
            label: "Journal",
          },
          {
            type: "string",
            name: "authors",
            label: "Authors",
            list: true,
            required: true,
          },
          {
            type: "string",
            name: "publisher",
            label: "Publisher",
          },
          { type: "number", name: "volume", label: "Volume" },
          { type: "number", name: "number", label: "Number" },
          { type: "string", name: "pages", label: "Pages" },
          {
            type: "rich-text",
            name: "abstract",
            label: "Abstract",
            isBody: true,
          },
          { type: "string", name: "preprint", label: "Preprint" },
        ],
      },
    ],
  },
});
