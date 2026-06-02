/** Encodează corect calea către PDF (inclusiv virgule, spații etc.) */
export function encodePdfUrl(pdfUrl: string): string {
    const prefix = '/comunicate/';
    if (!pdfUrl.startsWith(prefix)) {
        return encodeURI(pdfUrl).replaceAll('&', '%26');
    }
    const fileName = pdfUrl.slice(prefix.length);
    return prefix + encodeURIComponent(fileName).replaceAll('%26', '%26');
}
