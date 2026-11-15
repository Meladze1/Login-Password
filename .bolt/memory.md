# Project memory

## Product intent & audience

- Simple login/authentication screen with login and password fields and a validation button labeled "Kontrola".
- Hardcoded credentials: login **Admin**, password **Admin**.
- UI text is in **Czech** (e.g. success message "Heslo je správné! Vítejte!").
- User communicates in **Russian**.

## Brand personality & voice

- Straightforward, functional UI with direct feedback messages.
- Minimal copy in Czech.

## Visual design & UX direction

- Success message displayed in **green**; error message in **red** for immediate visual distinction.
- Form-based layout with login/password inputs and a submit button.
- CSS is maintained as a separate file; had Windows line-ending issues (CRLF) that required full rewrites.

## Decisions, constraints & rationale

- **Module script fix:** `type="module"` scripts don't expose functions to `onclick` HTML attributes, so `checkAcc` wasn't reachable. Fixed by adjusting how the function is attached to the button (likely via `addEventListener` or explicit `window` assignment).
- Build step exists and runs successfully ("Сborník/sbírka passed").
- Credentials are static/hardcoded for now (no backend auth).

## Open questions & assumptions

- No backend or real authentication system yet — unclear if one is planned.
- Unknown whether the login screen leads to a redirect or further app state after successful auth.
- Language scope: assumed Czech-only UI; no i18n framework evident.
- No `.bolt/prompt` file exists yet, so no global instructions to reference.