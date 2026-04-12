/**
 * Shared branded HTML email wrapper for client confirmation emails.
 * Uses inline styles throughout for email-client compatibility.
 */
export function brandedEmail({
  preheader = '',
  body,
}: {
  preheader?: string;
  body: string;
}): string {
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>windo.ch</title>
</head>
<body style="margin:0;padding:0;background-color:#FFFBF8;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  ${preheader ? `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${preheader}</div>` : ''}
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#FFFBF8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 1px 6px rgba(0,0,0,0.07);">

          <!-- Header -->
          <tr>
            <td style="background-color:#C94418;padding:20px 32px;">
              <p style="margin:0;font-size:20px;font-weight:700;color:#FFFFFF;letter-spacing:-0.3px;">windo.ch</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 32px 24px;">
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#FFF5EF;border-top:1px solid #FFD4C0;padding:16px 32px;">
              <p style="margin:0;font-size:12px;color:#999999;line-height:1.6;">
                Henry Barrows &middot;
                <a href="https://windo.ch" style="color:#C94418;text-decoration:none;">windo.ch</a>
                &middot;
                <a href="tel:+41791752020" style="color:#999999;text-decoration:none;">079 175 20 20</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Reusable CTA button for confirmation emails */
export function emailButton(label: string, href: string): string {
  return `<a href="${href}" style="display:inline-block;background-color:#C94418;color:#FFFFFF;font-weight:600;font-size:14px;text-decoration:none;padding:12px 24px;border-radius:8px;margin-top:8px;">${label} →</a>`;
}

/** Reusable checkmark list item */
export function emailCheck(text: string): string {
  return `<tr><td style="padding:4px 0;font-size:14px;color:#444444;line-height:1.5;"><span style="color:#C94418;font-weight:700;margin-right:8px;">✓</span>${text}</td></tr>`;
}
