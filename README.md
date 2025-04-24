# Covenant AI

Covenant AI is a Next.js-based project designed to provide advanced contract analysis and management features. This documentation provides an overview of the project, its structure, and how to get started.

## Project Overview
Covenant AI is a web application that leverages AI to analyze contracts and provide insights. It includes features such as user authentication, contract uploads, and detailed analysis results.

## Folder Structure
```
client/
  src/
    app/          # Application pages and layouts
    components/   # Reusable UI components
    hooks/        # Custom React hooks
    interfaces/   # TypeScript interfaces
    lib/          # Utility functions and API handlers
    providers/    # Context and state providers
    store/        # Zustand store for state management
server/
  src/
    config/       # Configuration files (e.g., Redis, Passport)
    controllers/  # API controllers
    middleware/   # Express middleware
    models/       # Mongoose models
    routes/       # API routes
    services/     # Business logic and services
    utils/        # Utility functions
```

## Key Features
- AI-powered contract analysis
- User authentication and authorization
- Interactive dashboards
- Zustand for state management

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

## State Management
The project uses Zustand for state management. Below is an example of the Zustand store:

```typescript
import { create } from "zustand";

interface ContractStore {
    analysisResults: any;
    setAnalysisResults: (results: any) => void;
}

const useContractStore = create<ContractStore>((set) => ({
    analysisResults: undefined,
    setAnalysisResults: (results) => set({ analysisResults: results }),
}));

export { useContractStore };
```

## Additional Features and Integrations

### Stripe Integration
The project integrates Stripe for payment processing. This allows users to make secure payments for premium features or services. The backend handles the payment logic, while the frontend provides a seamless user experience.

### ShadCN UI
The frontend leverages [ShadCN UI](https://shadcn.dev/) for building reusable and accessible UI components. This ensures a consistent design language and improves development efficiency.

## Installation Steps for Frontend Components

To set up the frontend components and dependencies:

1. **Install Dependencies**:
   Ensure you have all required dependencies installed by running:
   ```bash
   npm install
   ```

2. **Set Up Stripe**:
   - Add your Stripe API keys to the environment variables in `.env.local`:
     ```env
     STRIPE_PUBLIC_KEY=your-public-key
     STRIPE_SECRET_KEY=your-secret-key
     ```
   - Ensure the backend is configured to handle Stripe webhooks.

3. **Install ShadCN UI Components**:
   - Install the required ShadCN UI components:
     ```bash
     npm install @shadcn/ui
     ```
   - Import and use the components in your application as needed.

4. **Run the Development Server**:
   Start the client application:
   ```bash
   npm run dev
   ```

5. **Verify Setup**:
   - Open [http://localhost:3000](http://localhost:3000) and ensure all components are working as expected.
   - Test the Stripe payment flow to confirm integration.

## Contributing
Contributions are welcome! Please follow the guidelines below:
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Submit a pull request with a detailed description of your changes.

## License
This project is licensed under the MIT License.
