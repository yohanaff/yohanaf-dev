async function fetchMarkdownFromS3(fileUrl: string | URL | Request) {
    const res = await fetch(fileUrl);
    if (!res.ok) {
        throw new Error('Failed to fetch markdown');
    }
    return res.text();
}

export default fetchMarkdownFromS3;