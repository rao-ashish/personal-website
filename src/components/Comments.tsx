'use client';

import Giscus from '@giscus/react';

export default function Comments({ term }: { term: string }) {
    return (
        <Giscus
            id="comments"
            repo="rao-ashish/personal-website"
            repoId="R_kgDOPDIX7A"
            category="Announcements"
            categoryId="DIC_kwDOPDIX7M4C0PKy"
            mapping="specific"
            term={term}
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="light"
            lang="en"
            loading="lazy"
        />
    );
}
