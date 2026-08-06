/*
  minifyCss — strips comments and collapses whitespace in the CSS strings that
  components inject through `<style dangerouslySetInnerHTML>`.

  Those blocks are written pretty-printed and heavily commented, which is right
  for maintainability but means the indentation and comments are re-sent to the
  browser inside the HTML on every single request — ~55 KB on the homepage, of
  which ~20 KB was purely whitespace and comments.

  Keep writing the CSS pretty-printed and commented; wrap it in minifyCss() so
  only the meaningful bytes go over the wire:

      <style dangerouslySetInnerHTML={{ __html: minifyCss(`
        .foo { color: red; }
      `) }} />

  The transform is deliberately conservative — it only removes comments and
  squeezes whitespace runs. It does NOT reorder, merge, or rewrite anything, so
  the resulting stylesheet is semantically identical to the source.
*/
export function minifyCss(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "") // drop /* comments */
    .replace(/\s+/g, " ") // collapse newlines + indentation
    .replace(/\s*([{};,])\s*/g, "$1") // tighten around block/decl separators
    .replace(/;\}/g, "}") // drop the redundant final semicolon
    .trim();
}
