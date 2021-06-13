# esbuild side-effect imports

Packages `a` and `b` are identical except that `packages/a/package.json` specifies `"sideEffects": ["*.css"]`.

**Expected**:

- `out/index.css` contains contents of both `a.css` and `b.css`, since `a.css` is marked as side-effect-having

**Actual**:

- `out/index.css` only contains contents of `b.css`

This appears to be caused by the root of the dependency graph containing `a.css` being considered side-effect-free and therefore any side-effect-having imports within the graph are being removed.
