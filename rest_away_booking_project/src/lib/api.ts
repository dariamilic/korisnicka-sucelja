import { supabaseProperty } from "@/lib/supabase";

type PagingInfo = {
    _start?: number;
    _limit?: number;
};
export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
const PAGE_SIZE = Number(process.env.PAGE_SIZE);

async function getPostsCount(): Promise<number> {
    const { count, error } = await supabaseProperty
        .from('property_posts')
        .select('*', { count: 'exact', head: true });

    if (error) {
        console.error('Error fetching posts count:', error);
        return 0;
    }

    return count || 0;
}

async function getPosts({
    _start = 0,
    _limit = PAGE_SIZE,
}: PagingInfo): Promise<Post[]> {
    const { data, error } = await supabaseProperty
        .from('property_posts')
        .select('*')
        .range(_start, _start + _limit - 1);

    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }

    return data;
}

async function getPost(id: string): Promise<Post> {
    const { data, error } = await supabaseProperty
        .from('property_posts')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching post:', error);
        throw error;
    }

    return data;
}

export { getPosts, getPostsCount, getPost };