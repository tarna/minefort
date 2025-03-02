export interface BlogResponse {
    status: 'OK';
    result: Article;
}

export interface BlogListResponse {
    status: 'OK';
    result: Article[];
}

export interface Article {
    id: string;
    uuid: string;
    title: string;
    slug: string;
    html: string;
    comment_id: string;
    feature_image: string;
    featured: boolean;
    visibility: boolean;
    created_at: string;
    updated_at: string;
    published_at: string;
    custom_excerpt: string;
    codeinjection_head: string;
    codeinjection_foot: string;
    custom_template: string;
    canonical_url: string;
    authors: ArticleAuthor[];
    tags: AuthorTag[];
    primary_author: ArticleAuthor;
    primary_tag: AuthorTag;
    url: string;
    excerpt: string;
    reading_time: number;
    access: boolean;
    comments: boolean;
    og_image: string | null;
    og_title: string | null;
    og_description: string | null;
    twitter_image: string | null;
    twitter_title: string | null;
    twitter_description: string | null;
    meta_title: string;
    meta_description: string;
    email_subject: string | null;
    frontmatter: string | null;
    feature_image_alt: string | null;
    feature_image_caption: string | null;
}

export interface ArticleAuthor {
    id: string;
    name: string;
    slug: string;
    profile_image: string | null;
    cover_image: string | null;
    bio: string | null;
    website: string | null;
    location: string | null;
    facebook: string | null;
    twitter: string | null;
    meta_title: string | null;
    meta_description: string | null;
    url: string;
}

export interface AuthorTag {
    id: string;
    name: string;
    slug: string;
    description: string;
    feature_image: string;
    visibility: string;
    og_image: string | null;
    og_title: string | null;
    og_description: string | null;
    twitter_image: string | null;
    twitter_title: string | null;
    twitter_description: string | null;
    meta_title: string | null;
    meta_description: string | null;
    codeinjection_head: string | null;
    codeinjection_foot: string | null;
    canonical_url: string | null;
    accent_color: string | null;
    url: string;
}