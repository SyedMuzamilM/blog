declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"14-architectural-design-ideas-for-spacious-interior.md": {
  id: "14-architectural-design-ideas-for-spacious-interior.md",
  slug: "14-architectural-design-ideas-for-spacious-interior",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"how-to-become-frontend-master.md": {
  id: "how-to-become-frontend-master.md",
  slug: "how-to-become-frontend-master",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"template.md": {
  id: "template.md",
  slug: "template",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"this-bread-pudding-will-give-you-all-the-fall-feels.mdx": {
  id: "this-bread-pudding-will-give-you-all-the-fall-feels.mdx",
  slug: "this-bread-pudding-will-give-you-all-the-fall-feels",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"what-are-bitwise-operators.md": {
  id: "what-are-bitwise-operators.md",
  slug: "what-are-bitwise-operators",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("./config");
}
