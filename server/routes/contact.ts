import { Router, Request, Response } from 'express'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, company, message } = req.body

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Name, email, and message are required' })
      return
    }

    // Log the contact form submission (replace with email service or DB in production)
    console.log('Contact form submission:', { name, email, company, message })

    res.json({ success: true, message: 'Thank you! We will be in touch soon.' })
  } catch {
    res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
})

export default router
