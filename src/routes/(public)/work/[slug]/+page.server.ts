import { error, type LoadEvent } from "@sveltejs/kit";

export function load({ params }:LoadEvent) {
    if (params?.slug?.length && params?.slug?.length >  0) {
        return {
            slug: params.slug,
        };
    } else {
        throw error(404, 'Not found');
    }
}