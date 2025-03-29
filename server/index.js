require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow React frontend to connect
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Request logging
app.use(express.json());

// Test route
app.get('/api/contracts', async (req, res) => {
  const contracts = await prisma.contract.findMany();
  res.json(contracts);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await prisma.$disconnect(); // Close Prisma connection
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});