# esbuild side-effect imports

Packages `a` and `b` are identical except that `packages/a/package.json` specifies `"sideEffects": ["*.css"]`.

## How to run

```shell
npm ci
npm test
```

**Expected**:

- `out/app.css` contains contents of both `a.css` and `b.css`, since `a.css` is marked as side-effect-having

**Actual**:

- `out/app.css` only contains contents of `b.css`

This appears to be caused by the root of the dependency graph containing `a.css` being considered side-effect-free and therefore any side-effect-having imports within the graph are being removed.

## Comparing with webpack

```shell
npm run webpack
```

Inspecting `out-webpack/app.css` shows that both `a.css` and `b.css` are included.
