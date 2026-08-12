# Nati Salinas Art — The World of Rosa

Artist portfolio website for Nati Salinas Art, built with
Next.js and deployed on AWS.

Live Site: https://art.nati.studio

## About

The website provides a responsive portfolio experience where visitors can
explore artwork, view available products, request purchases, and submit
custom art commission inquiries.

## Features

- Responsive artist portfolio
- Horizontal artwork gallery
- Product catalog
- Multi-product purchase request form
- Custom art commission request form
- Server-side form processing with Next.js API routes
- Email notifications through Amazon SES
- Responsive navigation and mobile layouts
- Custom metadata, favicon, and social sharing image
- Custom domain with HTTPS
- Automated deployments from GitHub

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js Image Optimization

### Backend

- Next.js Route Handlers
- AWS SDK for JavaScript
- Amazon SES

### Infrastructure

- AWS Amplify Hosting
- AWS IAM
- Amazon Route 53
- Amazon SES
- GitHub

## Architecture

```text
Visitor
   │
   ▼
art.nati.studio
   │
   ▼
Amazon Route 53
   │
   ▼
AWS Amplify
   │
   ├── Next.js Frontend
   │
   └── Next.js API Routes
             │
             ▼
          AWS IAM
             │
             ▼
         Amazon SES
             │
             ▼
       Email Notification