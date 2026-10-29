/**
 * Renders a schema.org document as JSON-LD.
 *
 * The `<` escape matters: a string in the data containing `</script>` would
 * otherwise close the tag early and inject markup into the page.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
