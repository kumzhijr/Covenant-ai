# Covenant AI

Covenant AI is a full-stack platform designed to provide advanced contract analysis and management features, leveraging AI for insights and automation. This documentation provides an overview of the project, its structure, and how to get started.

## Project Overview
Covenant AI is a web application that integrates AI to analyze contracts, classify them, and provide risk and opportunity assessments. It includes features such as user authentication, contract uploads, payment processing, and detailed analysis results.

## Key Features
### Dashboard System
- Protected layout with sidebar navigation.
- Contract management table with sorting and pagination.
- File upload modal with PDF analysis workflow.
- Risk scoring and contract type classification.

### AI Integration
- PDF text extraction and contract type detection.
- Risk and opportunity analysis with severity levels.
- Multi-step analysis process with progress indicators.
- Caching system using Redis for large files.

### Authentication System
- Google OAuth integration.
- Session management with JWT.
- Role-based access control (Free/Premium tiers).
- User profile management.

### Payment System
- Stripe integration for subscriptions.
- Tiered feature system based on subscription status.
- Session management for payment flows.

## Technology Stack
### Frontend
- **Next.js 14** (App Router).
- **React Query** and **Zustand** for state management.
- **Shadcn UI** component library.
- **TanStack Table** for data grids.
- **Recharts** for data visualization.

### Backend
- **Express.js** and **Passport.js**.
- **MongoDB** with **Mongoose ODM**.
- **Redis** for caching.
- **Stripe API** integration.
- Custom AI analysis services.

## Project Structure
```
client/           # Next.js frontend
├─ components/    # Reusable UI components
├─ hooks/         # Custom React hooks
├─ lib/           # API/client configuration
├─ store/         # Zustand state management
└─ providers/     # React context providers

server/           # Node.js backend
├─ controllers/   # API route handlers 
├─ models/        # MongoDB schemas
├─ services/      # Business logic
├─ config/        # Third-party integrations
└─ routes/        # API endpoints
```

## AI Processing Flow
1. **File Upload**: Files are temporarily stored in Redis.
2. **PDF Text Extraction**: Extracts text and detects contract type.
3. **Multi-Stage Analysis**:
   ```mermaid
graph TD
  A[Risk Analysis] --> B[Opportunity Detection]
  B --> C[Legal Compliance Check]
  C --> D[Compensation Analysis]
  D --> E[Final Scoring]
   ```
4. **Results Caching**: Results are cached in Redis and stored in MongoDB.

## Deployment
- Containerized with Docker.
- Statically generated frontend pages (SSR/ISR).
- Redis-backed session storage.
- Horizontal scaling capabilities.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the `client` and `server` directories and install dependencies:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
3. Start the development servers:
   - Client:
     ```bash
     npm run dev
     ```
   - Server:
     ```bash
     npm run start
     ```

## Usage Instructions
- Open [http://localhost:3000](http://localhost:3000) to access the client application.
- Use the dashboard to upload contracts and view analysis results.

## Database Structure
The project uses MongoDB as its database. Below is an overview of the key collections and their structures:

### Users Collection
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "password": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```
- **_id**: Unique identifier for the user.
- **name**: Full name of the user.
- **email**: Email address of the user.
- **password**: Hashed password for authentication.
- **createdAt**: Timestamp when the user was created.
- **updatedAt**: Timestamp when the user was last updated.

### Contracts Collection
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "title": "string",
  "content": "string",
  "analysisResults": "object",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```
- **_id**: Unique identifier for the contract.
- **userId**: Reference to the user who uploaded the contract.
- **title**: Title of the contract.
- **content**: Full text of the contract.
- **analysisResults**: AI-generated analysis results for the contract.
- **createdAt**: Timestamp when the contract was created.
- **updatedAt**: Timestamp when the contract was last updated.

## Email Controllers
The project includes email functionality to send notifications and updates to users. Below is an overview of the email controller:

### Email Service
The `email.service.ts` file in the `server/src/services/` directory handles email-related operations. It uses a third-party email service (e.g., SendGrid or Nodemailer) to send emails.

#### Example Usage
```typescript
import { sendEmail } from "../services/email.service";

sendEmail({
  to: "user@example.com",
  subject: "Welcome to Covenant AI",
  text: "Thank you for signing up!",
});
```

#### Key Features
- Sends transactional emails (e.g., password resets, notifications).
- Configurable email templates.
- Supports multiple email providers.

### Environment Variables
Ensure the following environment variables are set in `.env`:
```env
EMAIL_SERVICE_API_KEY=your-api-key
EMAIL_FROM_ADDRESS=no-reply@covenant-ai.com
```

## Contributing
Contributions are welcome! Please follow the guidelines below:
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Submit a pull request with a detailed description of your changes.

## License
This project is licensed under the MIT License.
