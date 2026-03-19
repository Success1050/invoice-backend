# InvoiceFlow - Backend (NestJS) 🚀

A robust and efficient REST API for managing invoices and customers, built with **NestJS**. This project serves as the central data hub for both the **InvoiceFlow Web** and **InvoiceFlow Mobile** applications.

## ✨ Features

- **Full CRUD for Customers**: Endpoint-driven management for client profiles.
- **Full CRUD for Invoices**: Linked entity management with customer-side relations.
- **Enriched Relations**: Single-trip data fetching where invoices are automatically matched with customer metadata.
- **Optimized Performance**: Uses in-memory data structures for rapid response times.
- **Mobile-Ready Configuration**: Pre-configured to listen on all network interfaces (`0.0.0.0`) for seamless mobile connectivity on local networks.
- **CORS Enabled**: Ready for cross-origin requests from Next.js and Flutter.

## 🛠️ Technology Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Environment**: Node.js v18+

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Success1050/invoice-backend.git
   cd invoice-app-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Project

```bash
# Development mode
npm run start:dev
```

The API will be available at `http://localhost:3000`.

> [!IMPORTANT]
> **Mobile Connectivity**: The server is configured in `main.ts` to listen on `0.0.0.0`. This allows your Flutter mobile application to connect to the backend over your local network using your machine's IP address.

## 📑 API Endpoints

### 👥 Customers (`/customers`)
- `GET /customers`: Fetch all customers.
- `GET /customers/:id`: Fetch single customer.
- `POST /customers`: Create customer.
- `PUT /customers/:id`: Update customer.
- `DELETE /customers/:id`: Remove customer.

### 📄 Invoices (`/invoices`)
- `GET /invoices`: Fetch all invoices.
- `GET /invoices/:id`: Fetch single invoice.
- `POST /invoices`: Create invoice.
- `PUT /invoices/:id`: Update invoice.
- `DELETE /invoices/:id`: Remove invoice.

## 🔗 Related Repositories
- **Web Frontend (Next.js)**: [invoice-frontend](https://github.com/Success1050/invoice-frontend)
- **Mobile App (Flutter)**: [invoice-mobile](https://github.com/Success1050/invoice-mobile)

---
*Developed by Emmanuel Success as part of the Full-Stack Developer Assessment.*
