function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function onRequestPost(context) {
  const { BREVO_API_KEY } = context.env;

  if (!BREVO_API_KEY) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const formData = await context.request.json();
    const { name, company, email, phone, service, message } = formData;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Escape all user inputs to prevent XSS in email HTML
    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message);

    // Build email content
    const htmlContent = `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
        <div style="background: linear-gradient(135deg, #6366f1, #a855f7); padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">New Growth Plan Request</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 13px;">QuantumVora Contact Form</p>
        </div>
        <div style="background: white; padding: 24px; border: 1px solid #e2e8f0; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Name</td>
              <td style="padding: 10px 0; font-size: 14px; color: #0f172a; font-weight: 500;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Company</td>
              <td style="padding: 10px 0; font-size: 14px; color: #0f172a; font-weight: 500;">${safeCompany || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 10px 0; font-size: 14px; color: #0f172a; font-weight: 500;"><a href="mailto:${safeEmail}" style="color: #6366f1;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
              <td style="padding: 10px 0; font-size: 14px; color: #0f172a; font-weight: 500;">${safePhone || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Service</td>
              <td style="padding: 10px 0; font-size: 14px; color: #0f172a; font-weight: 500;">${safeService || '—'}</td>
            </tr>
            ${safeMessage ? `
            <tr>
              <td style="padding: 10px 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; font-size: 14px; color: #0f172a; font-weight: 500; line-height: 1.6;">${safeMessage}</td>
            </tr>` : ''}
          </table>
        </div>
        <div style="text-align: center; padding: 16px; font-size: 11px; color: #94a3b8;">
          Sent via QuantumVora Contact Form &bull; ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        </div>
      </div>
    `;

    // Call Brevo API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: safeName,
          email: 'b155a4001@smtp-brevo.com',
        },
        to: [
          {
            email: 'contact.quantumvora@gmail.com',
            name: 'QuantumVora',
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `[QuantumVora] New Growth Plan Request from ${safeName} — ${safeCompany || 'N/A'}`,
        htmlContent: htmlContent,
        tags: ['contact-form', 'growth-plan'],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Brevo API error:', response.status, errorData);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, message: 'Growth plan request sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
