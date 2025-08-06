import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const {
      NEXT_PUBLIC_SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY,
      RESEND_API_KEY,
      ADMIN_EMAIL,
    } = process.env

    const missingEnvVars = [
      !NEXT_PUBLIC_SUPABASE_URL && 'NEXT_PUBLIC_SUPABASE_URL',
      !SUPABASE_SERVICE_ROLE_KEY && 'SUPABASE_SERVICE_ROLE_KEY',
      !RESEND_API_KEY && 'RESEND_API_KEY',
      !ADMIN_EMAIL && 'ADMIN_EMAIL',
    ].filter(Boolean)

    if (missingEnvVars.length > 0) {
      return NextResponse.json(
        { error: `Missing environment variables: ${missingEnvVars.join(', ')}` },
        { status: 500 }
      )
    }

    const supabase = createClient(
      NEXT_PUBLIC_SUPABASE_URL!,
      SUPABASE_SERVICE_ROLE_KEY!
    )

    const resend = new Resend(RESEND_API_KEY!)
    const adminEmail = ADMIN_EMAIL!

    const { email, partnerEmail, connectionGap, source } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Insert into database
    const { data, error } = await supabase
      .from('beta_signups')
      .insert([
        {
          email: email.toLowerCase(),
          partner_email: partnerEmail?.toLowerCase() || null,
          connection_gap: connectionGap || null,
          source: source || 'landing',
        },
      ])
      .select()
      .single()

    if (error) {
      // Handle duplicate email
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already signed up for our beta!' },
          { status: 400 }
        )
      }
      throw error
    }

    const userConnectionGapHtml = connectionGap
      ? `
          <div style="background: #FEF7F7; border-left: 4px solid #FB7185; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #334155; font-size: 16px; margin-bottom: 10px;">Your Connection Goal:</h3>
            <p style="color: #64748B; font-style: italic;">"${connectionGap}"</p>
            <p style="color: #64748B; font-size: 14px; margin-top: 10px;">We're building RelationshipOS with challenges like yours in mind. Thank you for sharing!</p>
          </div>
        `
      : ''

    const partnerEmailHtml = partnerEmail
      ? `<p><strong>Partner Email:</strong> ${partnerEmail}</p>`
      : ''

    const adminConnectionGapHtml = connectionGap
      ? `
          <div style="background: #FEF7F7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-bottom: 10px;">Connection Challenge:</h3>
            <p style="color: #64748B; font-style: italic;">"${connectionGap}"</p>
          </div>
        `
      : ''

    const welcomeEmailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #4AB9B8; font-size: 28px; margin-bottom: 10px;">Welcome to RelationshipOS! 💕</h1>
            <p style="color: #64748B; font-size: 16px;">You're now in the exclusive beta program waitlist</p>
          </div>

          <div style="background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
            <h2 style="color: #334155; font-size: 20px; margin-bottom: 15px;">What happens next?</h2>
            <ul style="color: #64748B; line-height: 1.6; padding-left: 20px;">
              <li>You'll get exclusive founder pricing (50% off for life)</li>
              <li>Direct access to our team for feedback and features</li>
              <li>First access when we launch in September 2025</li>
              <li>Invitation to our private founder community</li>
            </ul>
          </div>

          ${userConnectionGapHtml}

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://hellorelationshipos.com"
               style="background: #4AB9B8; color: white; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-weight: 600; display: inline-block;">
              Learn More About Privacy
            </a>
          </div>

          <div style="border-top: 1px solid #E2E8F0; padding-top: 20px; text-align: center;">
            <p style="color: #94A3B8; font-size: 14px; margin-bottom: 10px;">
              Questions? Just reply to this email!
            </p>
            <p style="color: #94A3B8; font-size: 12px;">
              RelationshipOS • Building the future of connection, one insight at a time
            </p>
          </div>
        </div>
      `

    const adminEmailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #334155;">New RelationshipOS Beta Signup</h2>

          <div style="background: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            ${partnerEmailHtml}
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Signup Time:</strong> ${new Date().toLocaleString()}</p>
          </div>

          ${adminConnectionGapHtml}

          <p style="color: #64748B; font-size: 14px;">
            Total signups can be viewed in your Supabase dashboard.
          </p>
        </div>
      `

    // Send welcome email to user
    const welcomeEmailResult = await resend.emails.send({
      from: 'RelationshipOS <social@relationshipos.app>',
      to: [email],
      subject: '🎉 Welcome to RelationshipOS Beta!',
      html: welcomeEmailHtml,
    })

    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: 'RelationshipOS Notifications <social@relationshipos.app>',
      to: [adminEmail],
      subject: `🚀 New Beta Signup from ${source}: ${email}`,
      html: adminEmailHtml,
    })

    // Update database to mark emails as sent
    await supabase
      .from('beta_signups')
      .update({ email_sent: true })
      .eq('id', data.id)

    console.log('Welcome email result:', welcomeEmailResult)
    console.log('Admin email result:', adminEmailResult)

    return NextResponse.json({
      success: true,
      message: 'Successfully joined the beta!',
    })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}