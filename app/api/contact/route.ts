import { Resend } from "resend"

const resend = new Resend(
    process.env.RESEND_API_KEY
)

export async function POST(req:Request){

    try{

        const body = await req.json()

        console.log("received body ->", body)

        const {
            full_name,
            email_address,
            subject,
            message
        } = body

        await resend.emails.send({

            from:"Portfolio <onboarding@resend.dev>",

            to:"nestorastheo@gmail.com",

            subject:
              `Portfolio Contact: ${subject}`,

            html:`
              <h2>New Portfolio Message</h2>

              <p>
              <strong>Name:</strong>
              ${full_name}
              </p>

              <p>
              <strong>Email:</strong>
              ${email_address}
              </p>

              <p>
              <strong>Message:</strong>
              </p>

              <p>${message}</p>
            `
        })

        return Response.json(
            {
                success:true,
                message:"Email sent"
            },
            {
                status:200
            }
        )

    }
    catch(error){

        console.error(error)

        return Response.json(
            {
                success:false,
                message:"Failed to send email"
            },
            {
                status:500
            }
        )

    }

}