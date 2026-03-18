# Invoice App Backend (NestJS)

A robust and efficient REST API for managing invoices and customers, built with NestJS. This project serves as the backend for the Invoice Management System.

## 🚀 Features

- **Full CRUD for Customers**: Create, Read, Update, and Delete customers.
- **Full CRUD for Invoices**: Create, Read, Update, and Delete invoices.
- **Advanced Invoice Relations**: Invoices are enriched with customer data.
- **Data Persistence**: Uses an optimized in-memory data structure for speed and simplicity.
- **Global Error Handling**: Integrated validation pipes and standard error responses.
- **CORS Support**: Configured for seamless integration with Next.js and Flutter frontends.

## 🛠️ Technology Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [NPM](https://www.npmjs.com/)

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-link>
   cd invoice-app-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The API will be available at `http://localhost:3000`.

---

## 📑 API Documentation

### 👥 Customers (`/customers`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/customers` | Fetch all customers |
| **GET** | `/customers/:id` | Fetch a single customer by ID |
| **POST** | `/customers` | Create a new customer |
| **PUT** | `/customers/:id` | Update an existing customer |
| **DELETE** | `/customers/:id` | Remove a customer |

**Request Body Example (POST/PUT):**
```json
{
  "name": "Emmanuel Eze",
  "email": "emmanuel@example.com",
  "phone": "09011122233"
}
```

### 📄 Invoices (`/invoices`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/invoices` | Fetch all invoices (enriched with customer info) |
| **GET** | `/invoices/:id` | Fetch a single invoice by ID |
| **POST** | `/invoices` | Create a new invoice |
| **PUT** | `/invoices/:id` | Update an existing invoice |
| **DELETE** | `/invoices/:id` | Remove an invoice |

**Request Body Example (POST/PUT):**
```json
{
  "customerId": 1,
  "amount": 1500,
  "status": "pending",
  "description": "Project Development Fee"
}
```

---

## 🔧 Project Structure

- `src/customers`: Logic for managing customer data.
- `src/invoices`: Logic for managing invoices and linking to customers.
- `src/main.ts`: Application entry point with global configurations.

## 📄 License

This project is licensed under the MIT License.
